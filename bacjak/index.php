<?php
    require_once("config.php");
    require_once("functions.php");
    $conn = connect();
    $arr = select($conn);
    close_db($conn);
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
<div class="container mt-5">
    <form action="newpost.php" method="POST">
        <input type="text" name="first_name" placeholder="first_name">
        <input type="text" name="second_name" placeholder="second_name">
        <input type="text" name="airport" placeholder="airport">
        <input type="submit" name="add" value="создать запись">
    </form>
    <table class="table table-bordered mt-3">
    <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">Имя</th>
            <th scope="col">Фамилия</th>
            <th scope="col">Аэропорт</th>
            <th scope="col">Дата покупки билета</th>
            <th scope="col">Дата вылета</th>
            <th scope="col">Дата прилета</th>
            <th scope="col">tools</th>
        </tr>
    </thead>
    <tbody>
    <? foreach ($arr as $key => $value) { 
        ?>
        <tr>
            <th><?=$value['id']?></th>
            <td><?=$value['first_name']?></td>
            <td><?=$value['second_name']?></td>
            <td><?=$value['airport']?></td>
            <td><?=$value['date_buy']?></td>
            <td><?=$value['date_to']?></td>
            <td><?=$value['date_from']?></td>
            <td><a href="delete.php?id=<?=$value['id']?>">delete</a> | <a href="update.php?id=<?=$value['id']?>">update</a></td>
        </tr>
        <?  } ?>
    </tbody>
    </table>
</div>
    
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>