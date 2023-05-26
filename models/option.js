const mongoose=require('mongoose');

//Create Option Schema
const optionSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    votes:{
        type:Number,
        default:0
    },
    link_to_vote:{
        type:String,
    },
    //Refer to Question 
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question',
        required:true
    }
},
{timestamps:true})

const Option=mongoose.model('Option',optionSchema);

module.exports=Option;