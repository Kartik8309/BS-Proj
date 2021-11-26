const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config')
const Form = require("./model/form")
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

//POST ROUTE
app.post('/contact',(req,res)=>{
    console.log(req.body)
    
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

app.listen(process.env.PORT);












/* initializations and DOM elements */

/* const form = document.querySelector("#contact-form") */;
/* const firstName = document.querySelector("#firstName ");
/* const lastName = document.querySelector("#lastName") */;
/* const email = document.querySelector("#email"); */
/* const message = document.querySelector("#message") */
/* const submitBtn = document.querySelector("#submitBtn");
/* let firstNameval,lastNameval,emailval,messageval; */
/*  */
/* const postClient = (firstname,lastname,email,message) => {
/*     axios.post("http://localhost:8000/clients",{ */
/*         id:Math.floor(Math.random() *10), */
/*         first_name:firstname, */
/*         last_name:lastname, */
/*         email:email, */
/*         message:message, */
/*     }) */
/*     .then(res=>console.log(res.data)) */
/*     .catch(err => console.log(err)) */
/* } */
/*  */
/* const formSubmit = (e) =>{ */
/*     e.preventDefault(); */
/*     firstNameval = firstName.value; */
/*     lastNameval = lastName.value; */
/*     emailval = email.value; */
/*     messageval = message.value;  */
/*     postClient(firstNameval,lastNameval,emailval,messageval)
/* } */
/*  */
/* form.addEventListener("submit",formSubmit) */