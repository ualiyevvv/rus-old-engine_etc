<?php include 'header.php' ?>
    
    <!-- Основной блок -->
    <div class="main">
    
    <!-- Левый блок -->
    <div class="left">
        
        <!-- Меню -->
		<?php include 'menu.php' ?>
        
        <div class="open">
            <p>now<br>is<br>open!</p>
        </div>
        
    </div>
        
    <!-- Правый блок -->
    <div class="right">

		<?php include $content['content']; ?>

        
    </div>
        
    <!-- Нижняя часть главного блока -->
	<?php include 'brand.php' ?>
        
	<?php include 'instagram.php' ?>
    
     <?php include 'network.php' ?>
    
    </div>
    
		<?php include 'footer.php' ?>
</body>
    
</html>