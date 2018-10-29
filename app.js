var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Displays name in browser
app.get('/', function(req, res){
    res.send('Hector Gonzalez');
})

// Request any name in the browser using a dynamic get route
app.get('/user/:name', function(req, res){
    res.send('Hey ' + req.params.name + '!');
})

// Adds two numbers using query routes
app.get('/test/add', (req, res) => { // to use: /testing/adding?num1=x&num2=y  
    const num1 = parseInt(req.query.num1, 10);
    const num2 = parseInt(req.query.num2, 10);
    res.send(`<h1>Hey you wanna add: ${num1} plus ${num2} is now ${num1 + num2}</h1>`);
});

// Creates a log in in which matches both Username and Password
app.post('/login', (req, res) => {
   const username = req.body.username;
   const password = req.body.password;
if (username === "type" & password === "pass"){
    res.json('You have been signed in');
} else {
    res.json('Your username or password is incorrect');
}
});

var years = [2005, 2006, 2007, 1019];
var years1 = [2009, 2810, 5932, 2018];

// deleting a item from the array of years
app.delete('/years/:item', (req, res, next) => {
    const item = req.params.item
    const theYears = years.indexOf(item);
    if(theYears != -1){
        years.splice(theYears, 1);
        res.json(`You have now deleted ${item}`);
    }else {
        res.json(`${item} not accepted, ${item} already in place`);
        next();
    }
})

// adding items in the root of years
app.post('/years/:item', (req, res, next) => {
    const item = req.params.item
    const theYears = years.indexOf(item)
    if (theYears === -1){ // if item is not displayed in array, then add item to the array
      years.push(item)
        res.json(`You just added an ${item} to your years !`)
    } else {
        res.json(`Error 409, ${item} already exists`);
        next();
    }
    
    
});





app.listen(process.env.PORT, process.env.IP, 8080, function(){
    console.log('Listening to port 8080')
})