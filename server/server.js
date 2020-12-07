var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  // if (req.method == 'OPTIONS') {
  //   res.send(200)
  // } else {
    next()
  // }
})
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
//登录
app.post('/user/login', (req, res) => {
  console.log('req', req)
  var result = {
    status: 200,
    message: 'success',
    data: null
  }
  return res.json(result)
})
//定义端口，此处所用为3000端口，可自行更改
var server = app.listen(3000, function() {
  console.log('runing 3000...')
})
