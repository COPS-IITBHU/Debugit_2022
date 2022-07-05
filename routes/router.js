const express = require('express');
const route = express.Router()

route.get('/', (req, res) => {
        res.render('home')
    })
    //route.get('/covind', (req, res) => {
    //   res.render('covind')
    //})
route.get('/symptoms', (req, res) => {
    res.render('symptoms')
})
route.get('/self', (req, res) => {
    res.render('self')
})
route.get('/sym', (req, res) => {
    res.render('symser')
})
route.get('/trav', (req, res) => {
    res.render('trav')
})
route.get('/varients', (req, res) => {
    res.render('varients')
})
route.get('/covi', (req, res) => {
    res.render('covi')
})
route.get('/covw', (req, res) => {
    res.render('covw')
})

route.get('/vac', (req, res) => {
    res.render('vaccine')
})
module.exports = route