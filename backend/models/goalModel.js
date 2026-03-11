const mongoose=require("mongoose");

const goalSchema=mongoose.Schema({
  text:{
    type:String,
    reuired:[true,"Please enter text"]
  }
},{
  timestamps:true
})

module.exports=mongoose.model('Goal',goalSchema);
