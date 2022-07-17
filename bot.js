const {Client, Intents} = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
const help = require('./utils/help')
const checkContestStatus = require('./schedule_check')
const server = require('./server')
require('dotenv').config()

const client = new Client({
	intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
})

client.on('ready', async () => {
    console.log(`Logged on as ${client.user.tag}`)
    server.serverStart()
	new WOKCommands(client, {
		commandsDir: path.join(__dirname, 'commands'),
    mongoUri: process.env.MONGO_URI,
    disabledDefaultCommands: [
            'help',
            'command',
            'language',
            'prefix',
            'requiredrole',
            'channelonly'
    ],
	}).setDefaultPrefix('r!')

  while(true) {
    await new Promise(r => setTimeout(r, 3 * 60 * 1000))
    checkContestStatus(client)
  }
})

client.on('guildCreate', async(guild) => {
    const channels = await guild.channels.fetch().then(channels => channels.filter(c => c.type === 'GUILD_TEXT'))
    const general = channels.find(c => c.name.toLowerCase() == 'general')
    if (general) {
        general.send(help.help())
    } else {
        channels.random().send(help.help())
    }
})

client.login(process.env.TOKEN)