//APPEND FILE ASYNCHRONOUS CALL
var fs = require('fs');
fs.appendFile('file1.txt', 'FULL STACK DEVELOPMENT', function (err) {
  if (err) throw err;
  console.log('Saved!');
});