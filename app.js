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
    res.render('home')
})

app.get('/friends', mong.getFriends);

app.post('/addFriend', mong.addFriend)

// app.get('/friends', (req, res) => {
//     res.render('friends', {friends})
// });

// app.post('/addFriend', (req, res) => {
//     friends.push(req.body.name);
//     res.redirect('/friends');
// })

app.get('*', (req, res) => {
    res.send('un oh, requested url not found.');
})

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})