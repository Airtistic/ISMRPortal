var express = require('express');
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

var www = express.static(__dirname);
app.use('/', www);

// API
app.get('/api/articles', getArticlesEn);
app.post('/api/articles', addItem);

// Cached content 
var articles = undefined;

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

function getArticlesEn(req, res){
  var start = new Date();
  var end = new Date() - start;

  if (!articles){
    console.info("Retrieved DynamoDb info", end);
    ddb.scan('Articles', {}, function(err, myArticles) {
      if(err) {
        console.log(err);
      } else {
        end = new Date() - start;
        console.info("Retrieved DynamoDb articles in: %dms", end);
        articles = myArticles;

        res.send(articles);
      }
    });
  } else {
    end = new Date() - start;
    console.info("Retrieved cached articles in: %dms", end);
    res.send(articles);
  }
}

app.listen(80);
console.log('successfully started!!');
console.log('----------------------');
console.log('http://ec2-54-165-237-141.compute-1.amazonaws.com/');
console.log('----------------------');
console.log('ctrl+c to stop');
