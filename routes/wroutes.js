var route=require('express').Router();
var winners=require('../model/winners');

route.get("/all",(request,response)=>{
    winners.find({},{_id:0},function(err,data){
        if(err)
        response.sendStatus(500);
      else 
         response.json(data);
    });
})

route.get("/all/:fname",(request,response)=>{
    let fname=request.params.fname;
    winners.find({firstname:{$regex:fname,$options:'i'}},{_id:0},function(err,data){
        if(err)
        response.sendStatus(500);
      else 
         response.json(data);
    });
})

module.exports=route;