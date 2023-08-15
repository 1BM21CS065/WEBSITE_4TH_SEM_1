let container = document.getElementById("body");
let form = document.getElementById("form");
let name = document.getElementById("name");

body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/blurred-interior-hospital-clinical-with-people-abstract-medical-background_1484-1309.jpg?w=2000')";
function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    
    var name = document.forms['myForm']["fname"].value;
    var nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)){
        seterror("name", "*Name should only contain letters");
        returnval = false;
    }
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone < 0){
        seterror("phone", "*Phone number should not be negative!");
        returnval = false;
    }
    else if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    else if(isNaN(phone)){
        seterror("phone", "*Phone number should contain only numbers!");
        returnval = false;
    }



    return returnval;
}
