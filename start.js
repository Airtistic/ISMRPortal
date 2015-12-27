var express = require('express');

var app = express();

var www = express.static(__dirname);
app.use('/', www);

app.get('/api/articles', getArticlesEn);

function getArticlesEn(req, res){
  res.send([
    {title:'News 1', contentUs:'This is awesome! 1'},
    {title:'News 2', contentUs:'This is awesome! 2'},
    {title:'News 3', contentUs:'This is awesome! 3'},
    {title:'News 4', contentUs:'This is awesome! 4'},
    {title:'News 4', contentUs:'This is awesome! 5'}
  ])
}

app.listen(8888);
console.log('successfully started!!');
console.log('----------------------');
console.log('http://localhost:8888/');
console.log('----------------------');
console.log('ctrl+c to stop');
