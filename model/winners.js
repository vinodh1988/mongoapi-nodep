var mongoose=require('mongoose');

var winners=mongoose.model('winners',mongoose.Schema(
    {
        firstname: String,
        bornCountry: String,
        prizes: [{year:String,category:String}]
    }
),'winners');

module.exports=winners;