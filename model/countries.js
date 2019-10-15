var mongoose=require('mongoose');

var countries=mongoose.model('countries',mongoose.Schema(
    {
        name: String,
        code: String
    }
),'countries');

module.exports=countries;