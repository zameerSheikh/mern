var express = require('express');
// const mong = require('./mongo');
const mong = require('./mongoose');
var mainRoutes = require('./routes/main-routes');
const homeRoute = require('./routes/home-route');
const HttpErr = require('./models/Http-error');

var app = express();
var bodyparser = require('body-parser');

app.set('view engine', 'ejs')

app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended: true}));

app.use(homeRoute);
app.use('/v1/api',mainRoutes);
// const friends = ['Wes', 'Tony', 'Addy', 'Waseem'];

app.use((req, res, next) => {
    res.status(404);
    res.render('404');
    // or to throw a error
    // const errr = new HttpErr('Sorry that route is not found!', 404)
    // throw errr;
})

app.use((error, req, res, next) => {
    if(res.headerSent){
        return res.next(error);
    }
    res.status(error.code || 500);
    res.json({message : error.message || 'An unknown error occured!'});
});

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})