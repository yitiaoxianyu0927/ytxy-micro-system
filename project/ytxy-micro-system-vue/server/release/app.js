const http = require("http");
const fs = require("fs");
const cp = require('child_process');
const path = require("path");
const glob = require('glob');
const cheerio = require('cheerio');
const mime = require("mime");
const portfinder = require('portfinder');
const config = require("../../config");


const host = "localhost";
const port = 4000;



//__dirname当前文件所在文件夹

const buildPackageName = config.buildPackageName; 


const baseUrl = `../../${buildPackageName}` ;



const server = http.createServer(function(req,res){

    //console.log(req.url)

    if( req.url == "/"+buildPackageName ){

        

        fs.readFile(path.join(__dirname,`${baseUrl}/index.html`) ,function(err,data){

            res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
            res.end(data);
    
        })

    }else{

        let url = req.url; 

        let _url = (req.url.indexOf("?") >=0 ? req.url.split("?")[0] : req.url)  ///去掉参数的路径
        
        //console.log(path.join(__dirname,"../../",_url),_url)

        fs.readFile(path.join(__dirname,"../../",_url) ,function(err,data){

          
            res.writeHead(200, {
                "Content-Type": mime.getType(path.basename(_url))    // 转换成mime类型
             });
            
            res.end(data);
    
        })

    }      

   

});

portfinder.basePort = port;

portfinder.getPort((err, port) => {

    server.listen(port,function(){
        
        console.log(`running at ${port}......`);
        
        cp.exec(`start http://${host}:${port}/`);

    })

})

