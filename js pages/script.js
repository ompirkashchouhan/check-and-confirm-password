const eye = document.querySelector(".show"),
creatPass = document.querySelector("#pass"),
confirmPass = document.querySelector("#con-pass");
alertIcon = document.querySelector("#errorIcon");
alertText = document.querySelector("#text");
submitButton = document.querySelector("#button");

// js code to show password

eye.addEventListener("click", ()=>{

if((creatPass.type === "password") && (confirmPass.type === "password")){

creatPass.type = "text";
confirmPass.type = "text";

eye.classList.replace(".show");

}else {
creatPass.type = "password";
confirmPass.type = "password";
eye.classList.replace(".show");
}

});


// js code to check and confirm input fields passwords

creatPass.addEventListener("input",()=>{
let inputValue = creatPass.value.trim(); //trim function do not more than one space

if(inputValue.length >= 8){
confirmPass.removeAttribute("disabled");
submitButton.removeAttribute("disabled");
submitButton.classList.add("active");
} else {
confirmPass.setAttribute("disabled" , true);
submitButton.removeAttribute("disabled" , true);
submitButton.classList.remove("active");
confirmPass.value = "";
alertText.innerText = "Enter at least 8 characters";
alertText.style.color = "#a6a6a6"
}
})


submitButton.addEventListener("click",()=>{

if(creatPass.value === confirmPass.value){
alertText.innerText = "Password matched";
alertText.style.color = "green"
alertIcon.style.display = "none";
confirmPass.value = "";
creatPass.value = "";

}else{
alertText.innerText = "Password didn't matched";
alertIcon.style.display = "block";
alertIcon.style.color = "red";
alertText.style.color = "red"
}

})