var fs = require ('fs');

function start(response) {
    fs.readFile("index.html", function(error,data){
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write(data);
        response.end();
    });
}

function upload(response) {
    fs.readFile("error.html", function(error,data){
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write(data);
        response.end();
    });
}

exports.start = start;
exports.upload = upload;
