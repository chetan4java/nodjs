
 var express = require('express')

var app = express() // the main app
// var admin = express() // the sub app

// admin.get('/', function (req, res) {
//   console.log(admin.mountpath) // /admin
//   res.send('Admin Homepage')
// })

// app.use('/admin/admin', admin) // mount the sub app


var admin = express()

admin.get('/', function (req, res) {
  console.dir(admin.mountpath) // [ '/adm*n', '/manager' ]
  res.send('Admin Homepage')
})

var secret = express()
secret.get('/', function (req, res) {
  console.log(secret.mountpath) // /secr*t
  res.send('Admin Secret')
})

admin.use('/secr*t', secret) // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.use(['/adm*n', '/manager'], admin) // load the 'admin' router on '/adm*n' and '/manager', on the parent app
 
app.listen(8085,()=>{
    console.log("server started ");
})
