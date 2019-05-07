function route(handle, pathname, response){
    if (typeof handle[pathname] === 'function'){
        handle[pathname](response);
    } else {
        console.log("there is no handler for the request at :" + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});   
        response.write("404 not found");
        response.end();
    }
}
exports.route = route;