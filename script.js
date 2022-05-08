const names = document.getElementById("name");
const password = document.getElementById("password");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phoneNumber");
let passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/);
let phoneRegex = new RegExp(/^\d{11}$/);
let emailregex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

names.addEventListener("change", function (){
    if(names.value.length < 5){
        alert("The name should be more that five letters");
        names.setAttribute("class", "form-control is-invalid");
        names.focus();
    }
    else{
        names.setAttribute("class", "form-control is-valid");
        names.focus();
    }

})
password.addEventListener("change", function(){
    if(!passwordRegex.test(password.value)){
        alert("This password is too weak");
        password.setAttribute("class", "form-control is-invalid");
        password.focus();

    }
    else{
        password.setAttribute("class", "form-control is-valid");
        password.focus();
    }


})
phonenumber.addEventListener("change", function(){
   if (!phoneRegex.test(phonenumber.value)){
   alert("Incorrect PhoneNumber");
        phonenumber.setAttribute("class", "form-control is-invalid");
        phonenumber.focus();
    }
    else{
        phonenumber.setAttribute("class", "form-control is-valid");
        phonenumber.focus();

    }

})
email.addEventListener("change", function(){
  if(!emailregex.test(email.value)){
    email.setAttribute("class", "form-control is-invalid");
    email.focus();
  }
  else{
    email.setAttribute("class", "form-control is-valid");
    email.focus();
  }

})
