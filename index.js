var express = require('express');
const app = express();
var path = require('path');
var router = express.Router();
  router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
  });
  app.use('/', router);
  app.use(express.static(path.join(__dirname, 'public')));//file with css is added via this line//
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');
module.exports=app;