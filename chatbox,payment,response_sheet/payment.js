var cardNumber = document.getElementById("ccnum");
var expDate = document.getElementById("expDate");
var cvv = document.getElementById("cvv");
let button  = document.getElementById("checkout");
let zip  = document.getElementById("zip");
let nameIn  = document.getElementById("cname");
let nameIn1  = document.getElementById("fname");
let checkR,check1R;


function check(event)
{
  if(Number.isInteger(parseInt(event.key)))
  {
    checkR = 1;
    console.log("check");
    return;
  }
  else{
    console.log("check1");  
    checkR = 0;
  }
}

function check1(event)
{
  if(Number.isInteger(parseInt(event.key)))
  {
    check1R = 1;
    console.log("check");
    return;
  }
  else{
    console.log("check1");  
    check1R = 0;
  }
}

button.onclick = function()
{

  if (checkR || !nameIn.value) {
    alert("Invalid Name");
    //return false;
  }
  
  else if (check1R  || !nameIn1.value) {
    alert("Invalid Name for billing");
    //return false;
  }
  
  else if (!cardNumber.value || cardNumber.value.length !== 16) {
    alert("Invalid card number");
    
    //return false;
  }
  else if (!expDate.value || expDate.value.length !== 4) {
    alert("Invalid expiration date");
    //return false;
  }

  else if (!cvv.value || cvv.value.length !== 3) {
    alert("Invalid CVV");
    //return false
  }
  else if (!zip.value || !Number.isInteger(parseInt(zip.value)) || zip.value.length !== 6) {
    alert("Invalid ZIP code");
  }

};

nameIn.addEventListener("keydown",check);
nameIn1.addEventListener("keydown",check1);