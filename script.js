const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config')

//Models
const Form = require("./model/form")
const Plan = require("./model/plan")

//JSON MIDDLEWARE TO GET DATA FROM REQUEST BODY
app.use(express.json())

//CORS 
const cors = require('cors')
app.use(cors({
    origin:"http://127.0.0.1:5500",
}))

//CONNECTING TO DB
mongoose.connect(process.env.DB_CONNECTION_STRING,{useNewUrlParser:true})

//VERIFYING CONNECTION
const db = mongoose.connection;
db.on("error",error=>console.error(error));
db.once("open",()=>console.log("connected"));

//CONTACT POST ROUTE
app.post('/contact',(req,res)=>{
    const postForm = new Form({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        message:req.body.message
    })
    postForm.save(err=>{
        if(err) {
           res.status(500).json({success:false});
        }
        else{
            res.status(200).json({success:true});
        }
    })
})

//PLAN POST ROUTE
app.post('/plans',(req,res)=>{
    const postPlan = new Plan({
        firstname:req.body.firstanme,
        lastname:req.body.lastname,
        email:req.body.email,
        plan:req.body.planName
    })
    postPlan.save(err => {
        if(err) {
            /* res.status(500).json({success:false}) */
            res.status(500).json({success:false})
        }
        else {
            res.status(200).json({success:true})
        }
    })
})

app.listen(process.env.PORT);
