var express = require('express');
const mong = require('../mongoose');

var mainRoutes = express.Router();

mainRoutes.get('/friends', mong.getFriends);

mainRoutes.post('/addFriend', mong.addFriend)

mainRoutes.get('/deleteFriend/:id', mong.deleteFriend)

mainRoutes.get('*', (req, res) => {
    res.render('404');
})

module.exports = mainRoutes;