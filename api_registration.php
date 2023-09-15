<?php

$host = 'mysqlidb';
$username = 'root';
$password = 'root';
$database = 'hpdb';

// Create a database connection
$connection = new mysqli($host, $username, $password, $database);

// Check if the connection was successful
if ($connection->connect_error) {
    die('Connection failed: ' . $connection->connect_error);
}

// Define the endpoint
$endpoint = 'http://localhost/api_registration.php/registration';


// Handle the request
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_SERVER['REQUEST_URI'] === $endpoint) {
    // Get the data from the request body
    $data = json_decode(file_get_contents('php://input'), true);

    //CRUD - POST, GET, DELETE, UPDATE

    // Extract the values
    $email = $data['email'];
    $name = $data['name'];
    $street = $data['street'];
    $city = $data['city'];
    $state = $data['state'];
    $postal = $data['postal'];
    $country = $data['country'];
    $pnum1 = $data['pnum1'];
    $pnum2 = $data['pnum2'];
    $date = $data['date'];

    // Insert the data into the table
    $query = "INSERT INTO registration (email, customer_name_first,street_address,city,state,postal,country,phone_number_1,phone_number_2,date) VALUES ('$email', '$name','$street','$city','$state','$postal','$country',$pnum1,$pnum2,'$date')";
    $result = $connection->query($query);

    if ($result) {
        // Insert successful
        echo 'Data inserted successfully';
    } else {
        // Insert failed
        echo 'Error: ' . $connection->error;
    }
}

// Close the database connection
$connection->close();
?>