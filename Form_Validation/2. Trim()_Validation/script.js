function checkName() {

    let name = document.getElementById("name").value.trim();

    if (name == "") {
        alert("Please Enter Name");
    } else {
        alert("Valid Name");
    }

}