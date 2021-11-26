const form = document.querySelector("#contact-form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message")
const submitBtn = document.querySelector("#submitBtn");
const formRes = document.querySelector("#formRes");
let firstNameval,lastNameval,emailval,messageval;

function postClient(firstname,lastname,email,message){
    fetch("http://localhost:3000/contact",{
        method:"POST",
        body:JSON.stringify({
            firstName:firstname,
            lastName:lastname,
            email:email,
            message:message
        }),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then(res => res.json())
    .then(data =>{
        if(data.success == true){
            formRes.classList.add("bg-success","fs-4","text-light");
            formRes.innerHTML="form submitted succesfully";
            window.setTimeout(closeDiv,4000);
        }
        else{
            formRes.classList.add("bg-danger","fs-4","text-light");
            formRes.innerHTML="error occured";
            window.setTimeout(closeDiv,4000);
        }
    })
}

function closeDiv(){
    formRes.style.display="none"
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