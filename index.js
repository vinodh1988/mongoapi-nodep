var express= require('express');
var path=require('path');
var app=express();

var croute=require("./routes/croutes");
var wroute=require("./routes/wroutes");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodedb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo db connection is open");
})

app.use("/countries",croute);
app.use("/winners",wroute);

app.listen('9999',function(){
  console.log("Server listening in 9999");
})