function checkMobile(){

    let mobile=document.getElementById("mobile").value;

    let pattern=/^[0-9]{10}$/;

    if(pattern.test(mobile)){
        alert("Valid Number");
    }
    else{
        alert("Invalid Number");
    }

}