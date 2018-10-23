var express = require('express');
var app = express();
var bodyParser = require('body-parser')

// Displays name in browser
app.get('/', function(req, res){
    res.send('Hector Gonzalez');
})

// Request any name in the browser using a dynamic get route
app.get('/user/:name', function(req, res){
    res.send('Hey ' + req.params.name + '!');
})

app.get('/test/add', (req, res) => { // to use: /testing/adding?num1=x&num2=y  
    const num1 = parseInt(req.query.num1, 10);
    const num2 = parseInt(req.query.num2, 10);
    res.send(`<h1>Hey you wanna add: ${num1} plus ${num2} is now ${num1 + num2}</h1>`);
    
});

app.listen(process.env.PORT, process.env.IP, 8080, function(){
    console.log('Listening to port 8080')
})