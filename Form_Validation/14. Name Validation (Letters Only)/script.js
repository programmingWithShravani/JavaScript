function checkName(){

    let name=document.getElementById("name").value;

    let pattern=/^[A-Za-z ]+$/;

    if(pattern.test(name)){
        alert("Valid Name");
    }
    else{
        alert("Only Letters Allowed");
    }

}