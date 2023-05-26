const Option = require("../models/option");
const Question=require('../models/question');

//Add vote to the option
const addVote = async (req, res) => {
    try {
        //Find the option with the ID
        const option=await Option.findById(req.params.id);
        //If option found
        if(option){
            //Increase Vote by One
            option.votes+=1;
            option.save();
            return res.status(200).json({"WoW":"User has Voted",
            option:option
        })
        }
        return res.status(404).json({"Erroor":"Link not found"})
    } catch (error) {
        return res.status(500).json({ "Err": error });
    }
}

//Delete a Option from the Question
const deleteOption=async(req,res)=>{
    try {
        //Find Option by Id
        const option=await Option.findById(req.params.id);
        //If option found
        if(option){
            //If option has zero votes
            if(!option.votes>0){
                //Delete option from DataBase;
                option.remove();
                //Find option Question
                const question=await Question.findById(option.question);
                //Pull the option from the array
                question.options.pull(option._id);
                question.save();
                return res.status(200).json({"WoW":"Option deleted"})
            }
            else{
                //Option has more than zero votes. So, we cannot delete it
                return res.status(402).json({"Error":"Option can't be deleted"})
            }
        }
        else{
            //Option was not Found
            return res.status(404).json({"Error":"Option not found"})
        }
    } catch (error) {
        return res.status(500).json({ "Err": error });
    }
}

module.exports={addVote, deleteOption};