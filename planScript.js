const form = document.querySelector("#plans-form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email")
const radioVals = document.getElementsByName("plans");
const planRes = document.querySelector("#planRes");
let radioValue;

function postRequest(firstNameVal,lastNameVal,emailVal,radioVal){
    /* console.log(firstNameVal,lastNameVal,emailVal,radioVal) */
    fetch("http://localhost:3000/plans",{
        method:"POST",
        body:JSON.stringify({
            firstanme:firstNameVal,
            lastname:lastNameVal,
            email:emailVal,
            planName:radioVal
        }),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then(res => res.json())
    .then(data =>{
        if(data.success == true){
            planRes.classList.add("bg-success","fs-4","text-light");
            planRes.innerHTML="Details sent succesfully";
            window.setTimeout(closeDiv,4000);
        }
        else{
            planRes.classList.add("bg-danger","fs-4","text-light");
            planRes.innerHTML="error occured";
            window.setTimeout(closeDiv,4000);
        }
    })
}

function closeDiv(){
    planRes.style.display="none"
}


const planformSubmit = (e) => {
    e.preventDefault();
    const firstNameVal = firstName.value;
    const lastNameVal = lastName.value;
    const emailVal = email.value;
    radioVals.forEach(elem =>{
        if(elem.checked){
            radioValue = elem.value;
        }
    })
    /* console.log(firstNameVal,lastNameVal,emailVal,radioValue) */
    postRequest(firstNameVal,lastNameVal,emailVal,radioValue)
}

form.addEventListener("submit",planformSubmit);

