
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config')
const Form = require("./model/form")
/* const bodyParser = require("body-parser") */
/* app.use(express.urlencoded()); 
app.use(express.json()); */

app.use(express.json())

mongoose.connect(process.env.DB_CONNECTION_STRING,{useNewUrlParser:true})

const db = mongoose.connection;
db.on("error",error=>console.error(error));
db.once("open",()=>console.log("connected"));

//check how to use formRouter


app.post('/contact',(req,res)=>{
    console.log(req.body.firstName)
    res.send("req accepted")
})
//const formRouter = require('./routes/contact')


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