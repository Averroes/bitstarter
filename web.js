var http = require('http');
fs= require("fs");

buf = new Buffer(fs.readFileSync('index.html'));
var message=buf.toString('utf8', 0, buf.length);

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(message);
    res.end();
});
server.listen(process.env.PORT || 8080);
