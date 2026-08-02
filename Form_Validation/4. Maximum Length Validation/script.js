function checkPassword(){

    let password=document.getElementById("password").value;

    if(password.length>15){
        alert("Password Too Long");
    }
    else{
        alert("Valid Password");
    }

}