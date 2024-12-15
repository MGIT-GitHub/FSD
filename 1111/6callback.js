// //call back function
// // create "file1.txt" first
var fs= require('fs')
fs.writeFile('file1.txt','fsd lab exam external callback prog', function()
    {
    console.log(" data written to file.txt")
})
console.log('End of the program.....')