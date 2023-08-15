const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

let button = document.getElementById("button");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");

        })
    })
})
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");

    })
})
var myInput = document.getElementById("psw");
var cp = document.getElementById("cpsw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
let mail = document.getElementById("mail");
const apiUrl = 'http://localhost/api_signup.php/signup';


function checkPassword() {
    if (cp.value !== myInput.value) {
        alert("Passwords don't match!");
    }
    else 
    {
      let data = {
        mail_id:mail.value,
        psw:myInput.value
      };
      
    let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data)
    };
      
    fetch(apiUrl, options)
        .then(function(response) {
          return response;
        })
        .then(function(jsonData) {
          console.log(jsonData);
          //window.location.assign("http://localhost/WEB_DEV/registration/registration.html");
          alert("Login Successfully");
        });
    }
}

myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}


myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}


myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }


    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }


    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    var adminEmailPattern = /.*admin@gmail\.com$/;
    if (adminEmailPattern.test(myInput.value)) {
        mail.classList.remove("invalid");
        mail.classList.add("valid");
    } else {
        mail.classList.remove("valid");
        mail.classList.add("invalid");
    }

    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

button.onclick = checkPassword;  
