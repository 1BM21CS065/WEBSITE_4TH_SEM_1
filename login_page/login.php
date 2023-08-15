<?php
 $mail=$_POST['mail'];
 $psw=$_POST['psw'];

//database connection//
$conn=new mysqli('localhost', 'root','', 'hospital_database');
if($conn->connect_error){
    die('Connection Failed: ' .$conn->connect_error);
}
else{
    $stmt=$conn->prepare("insert into signup(mail_id, psw) values(?, ?)");
    $stmt->bind_param("ss",$mail, $psw);
    try
    {
        $stmt->execute();
        sleep(2);
        echo "Signed in successfully";
        // Redirect browser
        header("Location: http://localhost/WEB_DEV/registration/registration.html");
    
        exit;
    }
    catch(Exception $e) {
        echo "User already exists.";
        
      }


    $stmt->close();
    $conn->close();


}
?>