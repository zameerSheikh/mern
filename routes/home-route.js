var express = require('express');

const homeRoute = express.Router();

homeRoute.get('/', (req, res, next) => {
    res.render('home',{name: 'zameer'})
});

module.exports = homeRoute;