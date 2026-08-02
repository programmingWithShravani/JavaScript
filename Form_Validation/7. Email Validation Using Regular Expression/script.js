function checkEmail(){

    let email=document.getElementById("email").value;

    let pattern=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if(pattern.test(email)){
        alert("Valid Email");
    }
    else{
        alert("Invalid Email");
    }

}