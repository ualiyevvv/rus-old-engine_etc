<!-- Правый блок -->
<div class="right">
  <div class="kroshki"><a href="<?=DOMAIN?>">Главная страница</a> &raquo; <a href="<?=DOMAIN?>catalog/">Каталог</a> &raquo; <a href="<?=DOMAIN?>catalog/<?= $content['sub_catalog'][0]['parent'][0]['url_category']?>/"><?=$content['sub_catalog'][0]['parent'][0]['name']?> </a> &raquo; <span><a href="<?=DOMAIN?>catalog/sub_catalog/<?=$content['sub_catalog'][0]['url_category'] ?> /"><?=$content['sub_catalog'][0]['name'] ?></a></span></div>
  <div class="tovar_catalog">
    <div class="namecat">
      <h2 class="namecat">
        <?=$content['sub_catalog'][0]['name'] ?>
      </h2>
    </div>
    <? foreach ($content['sub_catalog'][0]['catalog'] as $item): ?>
    <div class="product"><a href="<?=DOMAIN?>good/<?= $item['id_good'] ?>/"> <img src="<?=DOMAIN?><?= $item['foto'] ?>">
      <div class="product_descript">
        <div class="naming">
          <h1>
            <?= $item['name'] ?>
          </h1>
        </div>
        <div class="short_description">
          <?= $item['short_description'] ?>
        </div>
        </a>
        <div class="price_basket"> <span class="pricem">€
          <?= $item['price'] ?>
          </span>
          <input type="button" id="i1"  value="В КОРЗИНУ" onclick="add_basket('#i1')" data-product-guid="{{ item.ID_UUID }}">
        </div>
      </div>
    </div>
    <? endforeach; ?>
  </div>
</div>

