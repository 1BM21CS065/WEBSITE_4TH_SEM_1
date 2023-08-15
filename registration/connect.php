<?php
    $servername = "localhost";
    $username = "root";
    $password="";
    $conn = new mysqli('localhost','root','','hospital_database');
    $customer_name_first = $_POST['fname'];
    $street_address = $_POST['street_address'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $postal = $_POST['postal'];
    $country = $_POST['country'];
    $phone_number_1 = $_POST['fphone'];
    $phone_number_2 = $_POST['phone_number_2'];
    $email = $_POST['femail'];
    $date = $_POST['date'];

    //database connection
    if($conn->connect_error)  
    {
        die('Connection Failed : '.$conn->connect_error);
    }
    else
    {
        $stmt = $conn->prepare("insert into registration(customer_name_first,street_address,city,state,postal,country,phone_number_1,phone_number_2,email,date)values(?,?,?,?,?,?,?,?,?,?)");
        $stmt->bind_param("ssssisiisd",$customer_name_first,$street_address,$city,$state,$postal,$country,$phone_number_1,$phone_number_2,$email,$date);
        $stmt->execute();
        echo "Registration Succesful";
        header("Location: http://localhost/WEB_DEV/login_page/loginpage.html");
        $stmt->close();
        $conn->close();

        exit;
    }
?>
