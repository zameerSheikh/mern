var express = require('express');
// const mong = require('./mongo');
const mong = require('./mongoose');

var app = express();
var bodyparser = require('body-parser');
app.use(express.static("public"))

const friends = ['Wes', 'Tony', 'Addy', 'Waseem'];

app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('home',{name: 'zameer'})
})

app.get('/friends', mong.getFriends);

app.post('/addFriend', mong.addFriend)

app.get('/deleteFriend/:id', mong.deleteFriend)

app.get('*', (req, res) => {
    res.render('404');
})

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})