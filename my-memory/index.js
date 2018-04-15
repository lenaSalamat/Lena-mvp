var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/memo');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var memoSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var memo = mongoose.model('memo', memoSchema);

var selectAll = function(callback) {
  memo.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.memo=memo;