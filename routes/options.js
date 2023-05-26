const express=require("express");
const { addVote, deleteOption } = require("../controllers/option_controllers");
const router=express.Router();

//Options to use
router.get('/:id/add_vote',addVote);
router.delete('/:id/delete',deleteOption);

module.exports=router;