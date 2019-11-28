var express = require('express');
const mong = require('./mongo');

var app = express();
var bodyparser = require('body-parser');
app.use(express.static("public"))

const friends = ['Wes', 'Tony', 'Addy', 'Waseem'];

app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('You got to the root url')
})

app.get('/home', (req, res) => {
    res.render('home',{name: 'zameer'})
})

app.get('/friends', mong.getFriends);

app.post('/addFriend', mong.addFriend)

app.delete('/deleteFriend/:id', mong.deleteFriend)

app.get('*', (req, res) => {
    res.render('404');
})

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})