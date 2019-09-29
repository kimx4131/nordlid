let name = document.querySelector('#name');
let email = document.querySelector('#email');
let tlf = document.querySelector('#tlf');

let errorname = document.querySelector('#errorname');
let erroremail = document.querySelector('#erroremail');
let errortlf = document.querySelector('#errortlf');

let flagName = false;
let flagEmail = false;
let flagTlf = false;
let flagcheck = false;


name.addEventListener("keyup", function(){
    ValidateText(this);
});

function ValidateText(event){
if(event.value.length >= 2){
    name.classList.remove("error_my_input");
    errorname.classList.add("my_hide");
    errorname.classList.remove("my_show");
    flagName = true;
    } else { 
    name.classList.add("error_my_input");
    errorname.classList.add("my_show");
    errorname.classList.remove("my_hide");
    errorname.innerHTML ="UPS! Du mangler at udfylde noget.";
    flagName = false;
    }   		  
} 



email.addEventListener("keyup", function(){
    ValidateEmail(this);
});

function ValidateEmail(event){
    atpos = email.value.indexOf ("@");
    dotpos = email.value.lastIndexOf (".");

if(event.value.length >= 1 && atpos < 1 || ( dotpos - atpos < 2 ) ){
    email.classList.add("error_my_input");
    erroremail.classList.add("my_show");
    erroremail.classList.remove("my_hide");
    erroremail.innerHTML ="UPS! Du mangler at udfylde noget.";
    flagEmail = false;
    } else { 
    email.classList.remove("error_my_input");
    erroremail.classList.add("my_hide");
    erroremail.classList.remove("my_show");
    flagEmail = true;
    }   			  
} 


tlf.addEventListener("keyup", function(){
    ValidateTlf(this);
});

function ValidateTlf(event){
if(event.value.length >= 8){
    tlf.classList.remove("error_my_input");
    errortlf.classList.add("my_hide");
    errortlf.classList.remove("my_show");
    flagTlf = true;
    } else { 
    tlf.classList.add("error_my_input");
    errortlf.classList.add("my_show");
    errortlf.classList.remove("my_hide");
    errortlf.innerHTML ="UPS! Du mangler at udfylde noget.";
    flagTlf = false;
    }   			  
} 

