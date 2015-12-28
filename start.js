var express = require('express');
var bodyParser = require('body-parser')
var emailHubTransporter = require('./emailHub');
var credentials;
try{
  credentials = require('./credentials.js');
} catch(e) {
  // check if the file was created;
  if(!credentials){
    console.log('Please create a credentials.js in this root folder with the specs');
    console.log('you can find on the README.md');
    return;
  }
}


// DynamoDb API reference:
// https://www.npmjs.com/package/dynamodb
var ddb = require('dynamodb').ddb(credentials);

var app = express();
app.use(bodyParser.json());

var www = express.static(__dirname);
app.use('/', www);

// API
app.get('/api/articles', getArticlesEn);
app.post('/api/articles', addItem);
app.put('/api/articles', updateItem);
app.delete('/api/articles', removeItem);
app.post('/api/sendEmail', sendEmail);

function sendEmail(req, res){
  var message = JSON.stringify(req.body.emailSender);
  emailHubTransporter.sendMail({
    from: 'rafael.net.ca@gmail.com',
    to: 'wynhou@gmail.com',
    subject: 'Email from the ISMR website',
    text: message 
  });
  console.log('E-mail send successfully ' + message);
  res.send({data: 'Email sent successfully'});
}

// Cached content 
var articles = undefined;
var lastUpdate = new Date();
// var updateEveryXMilliseconds = 1000 * 3; //3 seconds
var updateEveryXMilliseconds = 1000 * 60 * 5; //5 minutes

function removeItem(req, res){
  //remove item
}

function updateItem(req, res){
  //update item
}

function addItem(req, res){
  // Example:
  // var item = { score: 304,
  //   date: (new Date).getTime(),
  //   sha: '3d2d6963',
  //   usr: 'spolu',
  //   lng: ['node', 'c++'] 
  // };
  //
  // ddb.putItem('a-table', item, {}, function(err, res, cap) {});
}

function shouldUpdate(newDate){
  return new Date() - lastUpdate > updateEveryXMilliseconds;
}

function returnFromDatabase(end, start, res){
  console.info("Retrieved DynamoDb info", end);
  ddb.scan('Articles', {}, function(err, myArticles) {
    if(err) {
      console.log(err);
    } else {
      end = new Date() - start;
      lastUpdate = new Date();
      console.info("Retrieved DynamoDb articles in: %dms", end);
      articles = myArticles;

      res.send(articles);
    }
  });
}

function returnCachedInfo(end, start, res){
  end = new Date() - start;
  console.info("Retrieved cached articles in: %dms", end);
  res.send(articles);
}

function getArticlesEn(req, res){
  var start = new Date();
  var end = new Date() - start;

  if (!articles || shouldUpdate()){
    returnFromDatabase(end, start, res);
  } else {
    returnCachedInfo(end, start, res);
  }
}

app.listen(80);
console.log('successfully started!!');
console.log('----------------------');
console.log('http://ec2-54-165-237-141.compute-1.amazonaws.com/');
console.log('----------------------');
console.log('ctrl+c to stop');
