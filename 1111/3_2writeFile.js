//WRITE FILE ASYNCHRONOUS CALL
var fs = require('fs');
fs.writeFile('file1.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});