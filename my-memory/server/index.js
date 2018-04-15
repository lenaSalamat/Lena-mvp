const express = require('express');
 let  app = express();
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
var db=require('./index.js')

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json());


 app.get('/Memo',function(req,res){
 	res.send('om dar3a')


 });
 app.get("/",function(req,res){
  res.render('index')
 })

app.post('/Memo',function(req,res){

 });




 let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});



