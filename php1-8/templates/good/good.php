    <!-- Правый блок -->
    <div class="right">
        <div class="kroshki"><a href="<?=DOMAIN?>">Главная страница</a> &raquo; <a href="<?=DOMAIN?>catalog/">Каталог</a> &raquo; <a href="<?=DOMAIN?>catalog/<?=$content['good']['kroshki'][2]['url_category'] ?>/"> <?=$content['good']['kroshki'][2]['name'] ?> </a>&raquo; <span><a href="<?=DOMAIN?>catalog/<?=$content['good']['kroshki'][1]['url_category'] ?>/"><?=$content['good']['kroshki'][1]['name'] ?> </a></span></div>
        
        <div class="productpic">
            <div class="img">          
                <div class="glr1">
                <ul>
                <div class="block1"><img src="<?=DOMAIN?><?=$content['good']['product']['foto'] ?>"> </div>
                  <li><img src="<?=DOMAIN?>images/Livello25.png">
                    <div class="block"><img src="<?=DOMAIN?>images/Livello25.png"> </div>
                  </li>
                  <li><img src="<?=DOMAIN?>images/Livello26.png">
                    <div class="block"><img src="<?=DOMAIN?>images/Livello26.png"> </div></li>
                  <li><img src="<?=DOMAIN?>images/Livello27.png">
                    <div class="block">
                    <img src="<?=DOMAIN?>images/Livello27.png"></div></li>
                </ul>
                
                </div>
                
                
            </div>
            <div class="name">
                <p class="nametov"><?=$content['good']['product']['name'] ?></p>
                <p class="price">€ <?=$content['good']['product']['price'] ?></p>
                <hr>
                <p class="discn">Quick Overview:</p>
                <p class="disc"><?=$content['good']['product']['short_description'] ?></p>
                <hr>
               
                <center><label>Количество товара<input type="text" id="i2" name="count_goods"></label><input type="button" id="i1"  value="В КОРЗИНУ" onclick="add_basket('#i1')" data-product-guid="<?=$content['good']['product']['ID_UUID'] ?>"></center>
            </div>
        </div>
        
        <div class="productdesc">
            <p class="descname">Product description</p>
            <p class="desctext"><?=$content['good']['product']['description'] ?></p>
        </div>

     
     
		<?php include '../templates/new-product.php' ?>
        
		<?php include '../templates/top-product.php' ?>
        

        </div>

