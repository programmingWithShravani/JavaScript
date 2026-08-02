function checkAgree(){

    let agree=document.getElementById("agree");

    if(!agree.checked){
        alert("Please Accept Terms");
    }
    else{
        alert("Accepted");
    }

}