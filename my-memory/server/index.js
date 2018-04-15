const express = require('express');
 let  app = express();
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
var db=require('../database-mongo/index.js')
app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: true }))
 app.use(bodyParser.json());


 app.get("/",function(req,res){
  res.render('index')
 })

 app.get('/memos',function(req,res){
 	
	db.selectAll(function(err, data){
	if (err) {
		res.sendStatus(500)
	}else{
		res.json(data);
	}
	})
 });

app.post('/memos', function(req, res){
	var x= req.body.memo
	console.log("hhhhh",x)
	db.save(x)
	res.json(x)
	
})




 let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});



