function check(){

    let pass=document.getElementById("pass").value;

    let confirm=document.getElementById("confirm").value;

    if(pass!=confirm){
        alert("Passwords Do Not Match");
    }
    else{
        alert("Passwords Match");
    }

}