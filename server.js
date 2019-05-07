var http = require ('http');
var url = require ('url');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        route(handle, pathname, response);
        }; 
        var server = http.createServer (onRequest);
        server.listen(8000);
        console.log("Server initialized and listen on port 8000");
}

exports.start = start;    