var route=require('express').Router();
var countries=require('../model/countries');

route.get("/all",(request,response)=>{
      countries.find({},{_id:0},function(err,data){
             if(err)
               response.sendStatus(500);
             else 
                response.json(data);
      });

})

module.exports=route;