<?php

namespace app;

class Auth 
{

	public function checkSignIn(){
		if (isset($_POST["signin"]) && trim($_POST["password"])!='') {
		    $email = $_POST['email'];
		    $password = $_POST['password'];
		    
		    $conn = connect();
		    $sql = "SELECT id,password FROM users WHERE email = '".$email."'";
		    $row = mysqli_query($conn,$sql);
		    $user = mysqli_fetch_assoc($row);
		    if (  $user['password'] == md5($password)) {
		        $hash = generateHash();
		        //$time = date("Y-d-m h:m:s");
		        $userId = $user['id'];

		        $sql = "UPDATE users SET hash = '".$hash."' WHERE id = " . $user['id'];
		        $conn->query($sql);
		        $sql = "INSERT INTO users_auth (user_id, hash,time) VALUE ($userId,'$hash',CURRENT_TIMESTAMP())";
		        $conn->query($sql);

		        setcookie("id",$user['id'], time()+3600*24*30);
		        setcookie("hash",$hash, time()+3600*24*30, null, null, null, null);
		        header("Location: main.php");
		    }
		    else {
		         echo"error pass";
		    } 
		    
		    close($conn);
		}
	}
}