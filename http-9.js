const { request } = require('express');
const http = require('http');

http.createServer((request, response) => {
    /**if(request.url == '/'){
    
    }*/

    switch (request.url) {
        case '/':
            // sending HTML Response
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(`
            <div>
            <h1>Welcome to my Home Page</h1>
            <div>
            `);
            // response.end('Welcome');
            break;
        case '/about':
            response.end('About');
            break;
        case '/contact':
            response.end('Contacts');
            break;
        default:
            response.end('Homepage');
            break;
    }
}).listen(3000, () => {
    console.log('Server is up on http://localhost:3000');
});