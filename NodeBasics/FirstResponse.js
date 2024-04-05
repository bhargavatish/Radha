const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Response </title></head>');
    res.write('<body>Welcome to my node.js project</body>');
    res.write('</html');
    res.end();
});
// server.listen(4000);
