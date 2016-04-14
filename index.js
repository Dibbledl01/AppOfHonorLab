var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("I'm working!");
});

app.listen(3001, function(){
  console.log("It's alive! :)");
});
