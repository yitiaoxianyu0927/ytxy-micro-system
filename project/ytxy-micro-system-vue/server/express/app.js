
const http = require("http");
const express = require('express')
const app = express()

// 设置跨域
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  res.header('Content-type', 'application/json;charset=utf-8')
  next()
})


app.post('/saveMenuConfig',(req,res) => {

    res.status(200)

    console.log(req,res)

})


// 配置服务端口
const server = app.listen(6000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Listen at http://%s:%s', host, port)
})

  

