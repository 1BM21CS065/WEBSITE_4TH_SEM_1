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
$endpoint = 'http://localhost/api_uploadpage.php/upload';

// Handle the request
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_SERVER['REQUEST_URI'] === $endpoint) {
    // Get the data from the request body
    $data = json_decode(file_get_contents('php://input'), true);

    // Extract the values
    $email = $data['mail'];
    $img_path = $data['img_path'];
    // ...

    // Insert the data into the table
    $query = "INSERT INTO upload (mail,img_path) VALUES ('$email', '$img_path')";
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
