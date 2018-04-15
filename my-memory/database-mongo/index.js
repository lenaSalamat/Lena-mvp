var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var memoSchema = mongoose.Schema({
 memo: String
});

var Memo = mongoose.model('Memo', memoSchema);



let save = (data) => {
  
  var memo= new Memo({memo:data})

    memo.save(function(err, data){
      if(err){
      console.log(err); 
      }else{
    console.log(data)
      }
    })
}

let selectAll = (callback) => {
  Memo.find({}, function(err, data) {
    if(err) {
      callback(err, null);
    } else {
      callback(null,data);
    }
  });
};
module.exports.selectAll = selectAll;
module.exports.save=save