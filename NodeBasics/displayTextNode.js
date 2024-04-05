const http = require ('http');
const fs= require('fs');
const server = http.createServer((req,res) => {
    const url = req.url
    const method = req.method;
    const body = [];
    if(url === '/'){
        fs.readFile('message.txt',{encoding : 'utf-8'},(err,data) =>{
            if(err){console.log(err)}
            res.write('<html>')
            res.write('<head><title>routing requests</title></head>'); 
            res.write(`<body>${data}</body`)
            res.write('<body><form action = "/message" method = "POST" ><input type ="text" name ="message"><button type="submit">Submit</button></form></body>')
            res.write('</html>')
            return res.end()
        })
    }
    else if(url === '/message' && method === "POST"){
        
        req.on('data',(chunk) =>{
            body.push(chunk)
        })
        return req.on('end',() =>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message)
            fs.writeFileSync('message.txt',message,(err) =>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
        
    }
    else{

        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>Aliter</title></head>')
        res.write('<body>Alternate text text</body>')
        res.write('</html>')
        res.end()
    }
})
server.listen(4400)