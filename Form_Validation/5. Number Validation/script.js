function checkAge(){

    let age=document.getElementById("age").value;

    if(age<18){
        alert("Not Eligible");
    }
    else{
        alert("Eligible");
    }

}