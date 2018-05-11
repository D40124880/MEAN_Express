var express = require('express');

var path = require('path');

var app = express();

var bodyParser = require('body-parser');

var session = require('express-session');
app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');




app.get('/', function(req, res){
    res.render('index');
})

app.post('/inform', function(req, res){
    req.session.form = {
        name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        comment: req.body.comment,
    }
    res.render('results',{user: req.session.form});
})

app.listen(1234, function(){
    console.log('Listening on port 1234');
})