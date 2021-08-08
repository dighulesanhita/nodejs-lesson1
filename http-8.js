const http = require('http');

http.createServer(function(request, response){
    console.log('Request received');
    //console.log(request.headers);
    response.end('Welcome to my webpage');




}).listen(3000, function(){
    console.log('Server is up on http://localhost:3000');
});
// most JS app are hosted at 3000