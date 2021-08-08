const { request } = require('express');
const http = require('http');

const menu = `
<ul>
<li>Home</li>
<li>About</li>
</ul>
`;
function getHomePage() {
    return `
    <html>
    <head>
    <title>Server Side Rendering App Demo</title>
    </head>
    <body>
    ${menu}
    <div>
            <h1>Welcome to my Home Page</h1>
            <div>
    </body>
    </html>
    `;
}

function getAboutPage() {
    return `
    <html>
    <head>
    <title></title>
    </head>
    <body>
    ${menu}
    <div>
            <h1>Welcome to my about Page</h1>
            <div>
    </body>
    </html>
    `;
}

function getNotFoundPage() {
    return `
    <html>
    <head>
    <title></title>
    </head>
    <body>
    ${menu}
    <div>
            <h1>404 Page Not Found</h1>
            <div>
    </body>
    </html>
    `;
}
http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    switch (request.url) {
        case '/':
            // sending HTML Response
            response.write(getHomePage());
            break;
        case '/about':
            // sending HTML Response
            response.write(getAboutPage());
            break;
        default:
            response.write(getNotFoundPage());
            break;
    }
    response.end();
}).listen(3000, () => {
    console.log('Server is up on http://localhost:3000');
});