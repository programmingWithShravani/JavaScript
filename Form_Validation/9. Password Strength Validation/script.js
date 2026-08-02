function checkPassword(){

    let password=document.getElementById("password").value;

    let pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;

    if(pattern.test(password)){
        alert("Strong Password");
    }
    else{
        alert("Weak Password");
    }

}