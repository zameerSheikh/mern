var express = require('express');
// const mong = require('./mongo');
const mong = require('./mongoose');
var mainRoutes = require('./routes/main-routes');
const homeRoute = require('./routes/home-route');

var app = express();
var bodyparser = require('body-parser');
app.use(express.static("public"))

app.use(homeRoute);
app.use('/v1/api',mainRoutes);
const friends = ['Wes', 'Tony', 'Addy', 'Waseem'];

app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended: true}))



const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})