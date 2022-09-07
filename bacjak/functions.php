<?php

function connect()
{
    $conn = mysqli_connect(SERVERNAME, USERNAME, PASSWORD, DBNAME);
    mysqli_set_charset($conn, "utf8");

    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
}

function select($conn)
{   
    $sql = "SELECT * FROM passengers";
    $result = mysqli_query($conn, $sql);
    $arr = [];
    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            $arr[] = $row;
        }
    }
    return $arr;
}

function select_once($conn,$id)
{
    $sql = "SELECT * FROM passengers WHERE id=".$id;
    $result = mysqli_query($conn, $sql);
    $arr = [];
    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            $arr[] = $row;
        }
    }
    return $arr;
} 

function delete($conn,$id)
{
    $sql = "DELETE FROM passengers wHERE id = " . $id;
    if ($conn->query($sql) === TRUE) {
        $success = 'success delete';
        return $success;
    } 
    else {
        $ere = 'err delete';
        return $ere;
    }
    
}


function close_db($conn)
{
    mysqli_close($conn);
}