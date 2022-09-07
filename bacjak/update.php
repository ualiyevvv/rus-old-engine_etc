<?php
require_once("config.php");
require_once("functions.php");

$id = $_GET['id'];
if (isset($id ) && trim($id )!='' ) {
    $conn = connect();
    $article = select_once($conn,$id);
        
    if (isset($_POST['update']) && trim($_POST['first_name']) !='' ) {
        $conn = connect();
        
        $first_name = $_POST['first_name'];
		$second_name = $_POST['second_name'];
		$airport = $_POST['airport'];
        
        $sql = "UPDATE passengers SET first_name = '".$first_name."', second_name = '".$second_name."', airport = '".$airport."' WHERE id = $id";
        

        if ($conn->query($sql) === TRUE) {
            header("Location: /"); 
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        close_db($conn);

    }
}
else {
    header("Location: /");
}


?>
<form action="" method="POST">
	<input type="text" name="first_name" placeholder="first_name" value="<?=$article[0]['first_name']?>">
    <input type="text" name="second_name" placeholder="second_name" value="<?=$article[0]['second_name']?>">
    <input type="text" name="airport" placeholder="airport" value="<?=$article[0]['airport']?>">
    <input type="submit" name="update" value="изменить">
</form>