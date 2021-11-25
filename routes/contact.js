const express =  require("express");
const router = express.Router();

const Form = require('../model/form')

//post form route
router.post('/contact', async (req,res)=>{
    const postedForm = new Form() 
})

/*  try {
        const myForm = new Form(req.body);
        await myForm.save();
        res.send(myForm);
    } catch (error) {
        res.send(error)
    } */

module.exports = router