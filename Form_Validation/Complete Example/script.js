
      document
        .getElementById("registerForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          let fname = document.getElementById("fname").value.trim();
          let lname = document.getElementById("lname").value.trim();
          let username = document.getElementById("username").value.trim();
          let email = document.getElementById("email").value.trim();
          let mobile = document.getElementById("mobile").value.trim();
          let password = document.getElementById("password").value;
          let confirm = document.getElementById("confirm").value;
          let dob = document.getElementById("dob").value;
          let country = document.getElementById("country").value;
          let address = document.getElementById("address").value.trim();
          let terms = document.getElementById("terms").checked;
          let gender = document.querySelector('input[name="gender"]:checked');
          let hobbies = document.querySelectorAll(".hobby:checked");
          let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
          let mobilePattern = /^[6-9]\d{9}$/;
          let usernamePattern = /^[A-Za-z0-9_]{4,15}$/;
          let passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;
          if (fname == "") {
            alert("First Name Required");
            return;
          }
          if (!/^[A-Za-z]+$/.test(fname)) {
            alert("First Name Only Letters");
            return;
          }
          if (lname == "") {
            alert("Last Name Required");
            return;
          }
          if (!/^[A-Za-z]+$/.test(lname)) {
            alert("Last Name Only Letters");
            return;
          }
          if (!usernamePattern.test(username)) {
            alert("Username must be 4-15 characters");
            return;
          }
          if (!emailPattern.test(email)) {
            alert("Invalid Email");
            return;
          }
          if (!mobilePattern.test(mobile)) {
            alert("Invalid Mobile Number");
            return;
          }
          if (!passwordPattern.test(password)) {
            alert("Weak Password");
            return;
          }
          if (password !== confirm) {
            alert("Passwords Do Not Match");
            return;
          }
          if (gender == null) {
            alert("Select Gender");
            return;
          }
          if (dob == "") {
            alert("Select Date Of Birth");
            return;
          }
          if (country == "") {
            alert("Select Country");
            return;
          }
          if (hobbies.length == 0) {
            alert("Select At Least One Hobby");
            return;
          }
          if (address.length < 10) {
            alert("Address Too Short");
            return;
          }
          if (!terms) {
            alert("Accept Terms");
            return;
          }
          alert("Registration Successful");
          this.reset();
        });
      document
        .getElementById("loginForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          let email = document.getElementById("loginEmail").value.trim();
          let password = document.getElementById("loginPassword").value;
          let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
          if (!emailPattern.test(email)) {
            alert("Invalid Email");
            return;
          }
          if (password == "") {
            alert("Enter Password");
            return;
          }
          alert("Login Successful");
          this.reset();
        });
    