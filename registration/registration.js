let container = document.getElementById("body");


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
//['myForm']
function validateForm(){
    //event.preventDefault();
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

    var street = document.forms['myForm']["street_address"].value;
    var city = document.forms['myForm']["city"].value;
    var state = document.forms['myForm']["state"].value;
    var postal = document.forms['myForm']["postal"].value;
    var country = document.forms['myForm']["country"].value;
    var date = document.forms['myForm']["date"].value;

    console.log(returnval);

    if(returnval)
    {
        // API endpoint URL
        const apiUrl = 'http://localhost/api_registration.php/registration';

        let data = {
            email:email,
            name:name,
            street:street,
            city:city,
            state:state,
            postal:postal,
            country:country,
            pnum1:phone,
            pnum2:phone,
            date:date
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
            console.log(jsonData.response);
            window.location.assign("http://localhost/login_page/loginpage.html");
            alert("end");
            });
    }

    window.location.href = "http://localhost/login_page/loginpage.html";

}


document.forms.addEventListener("submit",validateForm);