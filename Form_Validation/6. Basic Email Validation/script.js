function checkEmail(){

    let email=document.getElementById("email").value;

    if(email.includes("@")==false){
        alert("Invalid Email");
    }
    else{
        alert("Valid Email");
    }

}