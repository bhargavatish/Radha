const http = require('http');

const routes = require('./routes')

const value= routes.text;
console.log(value)

const server = http.createServer(routes.handler);

server.listen(3000);
