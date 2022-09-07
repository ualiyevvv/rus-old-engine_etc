<?php require_once "templates/header.php"; ?>
<form action="" method="POSt" enctype="multipart/form-data">
    <input type="text" name="title" placeholder="title">
    <input type="text" name="description" placeholder="description">
    <input type="file" name="image"><br>
    <input type="text" name="tags" placeholder="tag">
    <input type="submit" name="add">
</form>
<?php require_once "templates/footer.php"; ?>

