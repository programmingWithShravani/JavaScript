function checkPassword(){

    let password=document.getElementById("password").value;

    if(password.length<8){
        alert("Password must contain minimum 8 characters");
    }
    else{
        alert("Password Accepted");
    }

}