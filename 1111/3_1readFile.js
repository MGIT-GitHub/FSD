// //READ FILE
// // first create "file1.txt"
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('file1.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);