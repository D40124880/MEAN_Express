var express = require("express");

var app = express();

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response){
    response.send("<h1>Main Page</h1>");
})

app.get('/cats', function(request, response){
    response.render('cats')
})
app.get('/first', function(request, response){
    var cat = {
        image : 'cat1.jpg',
        name : "Poppy",
        fav : "meat",
        age : 4,
        spots : ['bed', 'in the sun'],
    }
    response.render('details', cat);
})
app.get('/second', function(request, response){
    var cat = {
        image : 'cat2.jpg',
        name : "Dagger",
        fav : "fish",
        age : 7,
        spots : ['bed', 'pool'],
    }
    response.render('details', cat);
})
app.get('/third', function(request, response){
    var cat = {
        image : 'cat3.jpg',
        name : "Spotty",
        fav : "meat",
        age : 2,
        spots : ['baithing', 'in the sun'],
    };
    response.render('details', cat);
})
app.listen(8000, function(){
    console.log("Listening on port 8000");
})