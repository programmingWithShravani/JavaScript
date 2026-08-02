function checkGender(){

    let gender=document.querySelector('input[name="gender"]:checked');

    if(gender==null){
        alert("Select Gender");
    }
    else{
        alert("Gender Selected");
    }

}