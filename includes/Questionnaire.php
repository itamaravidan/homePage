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


$q1 = $_POST['Q1'];
$q2 = $_POST['Q2'];
$q3 = $_POST['Q3'];
$q4 = $_POST['Q4'];
$q5 = $_POST['Q5'];
$q6 = $_POST['Q6'];
$q7 = $_POST['Q7'];
$q8 = $_POST['Q8'];
$q9 = $_POST['Q9'];
$q10 = $_POST['Q10'];


$sql = "INSERT INTO Form_101 (Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10) 
VALUES ('$q1', '$q2', '$q3', '$q3', '$q4', '$q5', '$q6', '$q7', '$q8', '$q9', '$q10')";


$conn->close();

?>