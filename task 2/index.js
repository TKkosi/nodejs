var http = require("http");

http.createServer(function (req,res){
    res.end("<h1>Hello Node!!!</h1>");
}).listen(3000)

console.log('server running at http://localhost:3000/')