const express=require("express");
const { createQuestion, createOptions, viewQuestion, deleteQuestion } = require("../controllers/question_controllers");
const Question = require("../models/question");
const router=express.Router();

//View all questions data on http://localhost:5000/questions
router.get('/',async (req,res)=>{
    const data=await Question.find().populate({
        path:'options',
        select:"id text votes link_to_vote"
    });
    if(data){
        return res.json({
            Message:"Welcome to Polling System API",
            Data:data
        })
    }
    else{
        return res.json({
            Message:"Welcome to Polling System API"
        })
    }
})

//Routes for different functions in URL
router.post('/create',createQuestion);
router.post('/:id/options/create',createOptions);
router.get('/:id',viewQuestion);
router.delete('/:id/delete',deleteQuestion)

module.exports=router;