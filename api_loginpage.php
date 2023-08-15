<?php

$host = 'localhost';
$username = 'root';
$password = '';
$database = 'hospital_database';

// Create a database connection
$connection = new mysqli($host, $username, $password, $database);

// Check if the connection was successful
if ($connection->connect_error) {
    die('Connection failed: ' . $connection->connect_error);
}

// Define the endpoint
$endpoint = '/WEB_DEV/api_loginpage.php/signup';

// Handle the request
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_SERVER['REQUEST_URI'] === $endpoint) {
    // Retrieve data from the table
    $query = 'SELECT * FROM signup';
    $result = $connection->query($query);

    // Check if the query was successful
    if ($result) {
        // Fetch the data as an associative array
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        // Set the response headers
        header('Content-Type: application/json');

        // Convert the data to JSON and output it
        echo json_encode($data);
    } else {
        // Handle query error
        echo 'Error: ' . $connection->error;
    }
}

// Close the database connection
$connection->close();
?>
