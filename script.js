
/* initializations and DOM elements */
const axios = require('axios')
const form = document.querySelector("#contact-form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message")
const submitBtn = document.querySelector("#submitBtn");
let firstNameval,lastNameval,emailval,messageval;

const postClient = (firstname,lastname,email,message) => {
    axios.post("http://localhost:8000/clients",{
        id:Math.floor(Math.random() *10),
        first_name:firstname,
        last_name:lastname,
        email:email,
        message:message,
    })
}

const formSubmit = (e) =>{
    e.preventDefault();
    firstNameval = firstName.value;
    lastNameval = lastName.value;
    emailval = email.value;
    messageval = message.value; 
    postClient(firstNameval,lastNameval,emailval,messageval)
}

form.addEventListener("submit",formSubmit)