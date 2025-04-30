// const fs=require('fs')
// fs.writeFileSync('hello.txt','hello from node.js')
// rep.url,rep.menthod,rep.header
// auto exit use process.exit()
const https=require('http')
const server=https.createServer((rep,res)=>{
    const url=rep.url
    if(url==='/'){
        res.setHeader('content-type','text/html')
        res.write('<html>')
        res.write('<header><title>form</title></header>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"> </form></body>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<header><title>practive</title></header>')
   res.write('<body><h1>nan than da leo!!</h1></body>')
    res.write('</html>')
    res.end()
})
server.listen(3000)