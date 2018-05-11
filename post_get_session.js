app.HTTP_VERB('URL', function(req, res){}); // HTTP_VERB is either 'get' or 'post' etc...
        
// root route
app.get('/', function(req, res){
    res.render('index', {title: "my Express project"});
});
 
// route to process new user form data:
app.post('/users', function(req, res){
    //code to add user to DB goes here!
    //redirect the user back to the root route.
    //all we do is specify the URL we want to go to:
    res.redirect('/');
})

// ================================================================================

// After installing body-parser (you should be very familiar with npm install by now), 
// require it and tell the express server to use it like so:

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

// lets say in an index.ejs view file we had a form that looked like this:

// <form action='/users' method='post'>
    // Name: <input type='text' name='name'>
    // Email: <input type='text' name='email'>
    // <input type='submit' value='Create User'>
// </form>

// ================================================================================

//route to process new user form data:
app.post('/users', function(req, res){
    console.log('POST DATA \n\n', req.body)
    // code to add user to DB goes here!
    // redirect the user back to the root route.
    res.redirect('/')
});

// req.body is a JSON object that contains the data from our form

// ================================================================================

// now to show the information of a specific user

// users : id // where : id is the id of a particular user. HTTP method is GET

// in our server.js --- add this route to show data

app.get('/users/:id', function(req, res){
    console.log('The user id requested is: ', req.params.id);
    // just to illustrate that req.params is usable here:
    res.send('You requested the user with id: ' + req.params.id);
    // code to get user from DB goes here, etc...
});

// any data you want to pass a URL must be indicated with a " : "--colon then available as req.params.object

// ================================================================================

// now to use session, first install express-session...then call it
// new code:
var session = require('express-session');
// original code:
var app = express();
// more new code:
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// ================================================================================

// now we want to store that session id somewhere like in the next example

app.post('/users', function(req, res){
    //set the name property of session:
    req.session.name = req.body.name;
    console.log(req.session.name);
    //code to add user to DB goes here!
    // redirect the user back to the root route.
    res.redirect('/');
});