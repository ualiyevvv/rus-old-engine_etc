<?php
require_once("config.php");
require_once("functions.php");
if (isset($_POST['add']) && trim($_POST['first_name']) !='' ) {
	$conn = connect();
	$conn -> set_charset("utf8");

	$first_name = $_POST['first_name'];
	$second_name = $_POST['second_name'];
	$airport = $_POST['airport'];
	
	$sql = "INSERT INTO passengers (first_name, second_name, airport, date_buy, date_to, date_from)
    VALUES ('".$first_name."','".$second_name."','".$airport."',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP())";
    if ($conn->query($sql) === TRUE) {
      header("Location: index.php");
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
    close_db($conn);

}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
</body>
</html>

