var express = require("express");

var app = express();

// getting files from folder views
app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

//getting files from folder static
app.use(express.static(__dirname + "/static"));

// where im rendering my individual pages
app.get('/', function(request, response){
    response.render("index");
})
app.get('/cats', function(request, response){
    response.render("cats");
})
app.get('/cars', function(request, response){
    response.render("cars");
})
app.get('/cars/new', function(request, response){
    response.render("form");
})

// listening to a specific port number!
app.listen(6789, function(){
    console.log("Listening on port 6789");
})