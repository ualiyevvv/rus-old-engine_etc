<?php
require_once("config.php");
require_once("functions.php");

if (isset($_GET['id']) && trim($_GET['id'])!='') {
    $conn = connect();
    $id = $_GET['id'];
    $delete = delete($conn, $id);
    if ($delete) {
        header("Location: /");
    }
    close($conn);
}
else {
    header("Location: /");
}