const express = require('express')
const bodyp = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()
const route = require('./routes/router')
const port = process.env.PORT || 5000

app.use(cors());
//app.use(bodyp());
app.use(express.static('public'));
app.use('/css', express.static(path.resolve(__dirname, "public/css")))
app.use('/img', express.static(path.resolve(__dirname, "public/img")))
app.use('/js', express.static(path.resolve(__dirname, "public/js")))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//route.get('/', (req, res) => {
//    res.render('home');
//})
//app.get('/varients', (req, res) => {
//    res.render('varients')
//})
/*app.get('/covi', (req, res) => {
    res.render('covi')
})
app.get('/covw', (req, res) => {
        res.render('covw')
    })*/
//app.get('/symser', (req, res) => {
//res.render('symser')
//})
app.get('/art', (req, res) => {
    res.render('article')
})
app.use('/', route)
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
});