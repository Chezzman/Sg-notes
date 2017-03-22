#NODE.JS

```
node
//this activates node

```
to deactivate this press control + d

```
cat index.js
//to inspet whats writen on the file
```

```
npm init
npm search say
npm install say --save
```

now that say is in the json file for tutorial purposes I will remove say from the node_modules and restall it a quicker way as its on json

```
rm -rf node_modules/say
//this force removes say

npm install
//this will insatll the dependencies in the json file

```

say is a libery that takes in perameters and uses the speaker to annonce it back, an example in the index.js

```
var say = requires('say');
say.speak('Hello world!');

```

now back to terminal to activate this

```
node index
>index.js
//from this will say out the speaker "Hello world!"
```

in node the requires method when for a file "./" it will first search for a module.exports

so in app.js

```
var interest = require('./interest');
```
and in interest.js

```
function blahBlah(){
 if
}

export.module = {
blahBlah: blahBlah
}
```

everything else in the interest file will be hidded to app.js apart from that one functon as it goes for that first and if found ignore other parts of the file.


##finding out what callbacks/annoymous function.

Do this ^^^ for


* promt.get(['deposit','years','rate'], function(err, result){
* });
* promt.get
 -there are two perameters the array and the function in this example
 the function will be executed after the array has been filed, so two out comes can happen
* err and result the function signatures
* err = error message
* if err is truthy then console log, else
* result = a variable is named summery and all parts of the array are a result that gets passed through the ./insterest function

```
prompt.get(['deposit' , 'years' , 'rate'], function (err, result) {

	// check for errors	
  if (err) {
    console.log('Sorry. That didn\'t work'); 
  }else{

	// use the module to calculate the interest
  var summary = interest.calculateInterest(result.deposit , result.years , result.rate);
	
  console.log('Amount after ' + result.years + ' years : ' + summary.total);
  console.log('Total interest : ' + summary.interest);
 }
});
```

another way of writing this will...

```
function displayInterstSummary(err, result)
 {
  if (err) {
    console.log('Sorry. That didn\'t work'); 
  }else{
  var summary = interest.calculateInterest(result.deposit , result.years , result.rate);
	
  console.log('Amount after ' + result.years + ' years : ' + summary.total);
  console.log('Total interest : ' + summary.interest);
 }
});

prompt.get(['deposit' , 'years' , 'rate'], displayInterstSummary)
```
Starting node.JS using nodemon to auto update node in the terminal on save,
it also uses express, these are shown in json as 

```
{
  "name": "express-web-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "nodemon": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.15.2"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}

```
the following is basic http responses
```
var express = require('express');
var app = express();
var port = 3000;


app.get('/', function(req, res){
  console.log('req.method:', req.method );
  res.send('<!DOCTYPE html><html><head><title>Yoyo</title></head><body><h1>hi there friend!</h1></body></html>');
});

app.post('/', function(req, res){
  console.log('req.method:', req.method);
  res.send({ message: 'POST MESSAGE'});
});

app.put('/', function(req, res){
  console.log('req.method:', req.method);
  res.send({ message: 'put recieved'});
});

app.delete('/', function(req, res){
  console.log('req.method:', req.method);
  res.send({ message: 'delete recieved'});
});

app.listen(port, function(){

  console.log('App is running on port', port);

});
```


___________________________________________________________________________
###7 RESTful routes

[7 RESTFul Routes](https://gist.github.com/alexpchin/09939db6f81d654af06b#file-restful_routes-md)


to test these on Postman

```
var express = require('express');
var app = express();
var port = 3000;

//Action: index
app.get('/users', function(req, res){
  res.status(200).send('<h1>Action: index</h1>');
});
//Action: new
app.get('/users/new', function(req, res){
  res.status(200).send('<h1>Action: new</h1>');
});
//Action: create
app.post('/users', function(req, res){
  res.status(200).send('<h1>Action: create</h1>');
});
//Action: edit
app.get('/users/:id/edit', function(req, res){
  res.status(200).send('<h1>Action: edit</h1>');
});
//Action: update
app.put('/users/:id', function(req, res){
  res.status(200).send('<h1>Action: update</h1>');
});
//Action: show
app.get('/users/:id', function(req, res){
  res.status(200).send('<h1>Action: show</h1>');
});
//Action: destroy
app.delete('/users/:id', function(req, res){
  res.status(200).send('<h1>Action: destroy</h1>');
});
```
