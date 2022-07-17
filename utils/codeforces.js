const axios = require('axios')

module.exports = {
    getData : async function () {
        try {
            const contests = await axios.get('https://codeforces.com/api/contest.list?gym=false').then(obj => obj.data.result)
            let contestArr = []
            for (let contest of contests) {

                if (contest.phase !== 'BEFORE' || contest.startTimeSeconds * 1000 < new Date().getTime()) break

                let tempObj = {
                    website: 'codeforces',
                    contestName: contest.name,
                    contestType: contest.type,
                    contestLink: `https://codeforces.com/contests/${contest.id}`,
                    contestStartTime: new Date(contest.startTimeSeconds * 1000),
                    contestDurationInMins: Math.floor(contest.durationSeconds / 60),
                }

                contestArr.push(tempObj)
            }
            return contestArr
        } catch (err){
            // console.log(err)
            return []
        }
    }
}