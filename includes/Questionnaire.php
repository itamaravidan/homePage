<?php

/*
$server_name = "localhost";
$database_name = "hadarpi_project_web_questionnaire";
$user_name = "hadarpi_user_questionnaire";
$password = "Aa1234567890!@#";
*/

$conn=new mysqli("localhost" ,"hadarpi_user_questionnaire","Aa1234567890!@#","hadarpi_project_web_questionnaire");

if($conn->connect_error){
    die("Connection failed: ".$conn->connect_error);
}

$q1 = $_POST['q1'];
$q2 = $_POST['q2'];
$q3 = $_POST['q3'];
$q4 = $_POST['q4'];
$q5 = $_POST['q5'];
$q6 = $_POST['q6'];
$q7 = $_POST['q7'];
$q8 = $_POST['q8'];
$q9 = $_POST['q9'];
$q10 = $_POST['q10']; 

$sql = "INSERT INTO Questionnaire (q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) 
VALUES ($q1', '$q2', '$q3', '$q4', '$q5', '$q6', '$q7', '$q8', '$q9', '$q10')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>