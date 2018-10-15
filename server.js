var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function (req,res){
    var u = url.parse(req.url,true)
    var path = u.pathname
    if(path == "/"){
        fs.readFile('./website/index.html',function(err,data){
            if(!err){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(data)
                res.end()
            }
            else{
                res.end("Erro de leitura")
            }
        })
    }else{
        var q = u.query
        var substring = "html/obra" + q.id + ".html"
        fs.readFile("website/" + substring,function(err,data){
            if(!err){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(data)
                res.end()
            }
            else{
                res.end("Erro de leitura")
            }
        })
    }
}).listen(4009, () => {
    console.log('Servidor está à escuta na porta 4009')
})