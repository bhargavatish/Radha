const http = require ('http');
const fs= require('fs');
const server = http.createServer((req,res) => {
    const url = req.url
    const method = req.method;
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>routing requests</title></head>'); 
        res.write('<body><form action = "/message" method = "POST" ><input type ="text" name ="message"><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/message' && method === "POST"){
        const body = [];
        req.on('data',(chunk) =>{
            body.push(chunk)
        })
        req.on('end',() =>{
            const parsedBody = Buffer.concat(body).toString();
            const message= parsedBody.split('=')[1];
            console.log(message)
            fs.writeFileSync('text.txt',message);
        })
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Aliter</title></head>')
    res.write('<body>Aliter text</body>')
    res.write('</html>')
    res.end()
})
server.listen(4000)

