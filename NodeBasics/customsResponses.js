const http = require('http');
const server = http.createServer((req, res) => {    
    let url = req.url;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Response </title></head>');
    function printData(data) {
        res.write(`<body>${data}</body>`);
    }
    switch (url) {
        case "/home": printData("Welcome home");
            break;
        case "/about": printData("Welcome to about us page");
            break;
        case "/node": printData("Welcome to my Node Js project")
            break;
        default: printData("Welcome home")
    }
    res.write('</html');
    res.end();
});
// server.listen(4000);