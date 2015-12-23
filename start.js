var express = require('express');

var app = express();

var www = express.static(__dirname);
app.use('/', www);

app.listen(8888);
console.log('successfully started!!');
console.log('----------------------');
console.log('http://localhost:8888/');
console.log('----------------------');
console.log('ctrl+c to stop');

