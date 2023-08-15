let image = document.getElementById("imgID");
let email = document.getElementById("emailID");

//var fileInput = document.getElementById('myFileInput');
var file = image.files[0];

function upload()
{
  if (file) {
    var path = "C:\\xampp\\htdocs\\uploads\\"+file.name;
    const url = "http://localhost/api_uploadpage.php/upload";

    let data = {
      mail:email.value,
      img_path:path
    };
    
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    };
    
    fetch(url, options)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        alert("IMAGE UPLOADED!");
        window.location.href = "http://localhost/WEB_DEV/login_continue/login_continue.html";
      }); 
    
  } else {
    alert("no file selected");
  }
}
