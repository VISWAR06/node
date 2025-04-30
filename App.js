// const fs=require('fs')
// fs.writeFileSync('hello.txt','hello from node.js')
// rep.url,rep.menthod,rep.header
// auto exit use process.exit()
const https=require('http')
const server=https.createServer((rep,res)=>{
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<header><title>practive</title></header>')
   res.write('<body><h1>nan than da leo!!</h1></body>')
    res.write('</html>')
    res.end()
})
server.listen(3000)