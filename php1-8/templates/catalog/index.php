<? foreach ($content['catalog'] as $item): ?>
<div>
  <div class="h_stycky">
    <h2 class="namecat">
      <?=$item['name'] ?>
    </h2>
  </div>
  <div class="tovar_category">
    <? foreach ($item['sub_category'] as $item1): ?>
    <div class="product_category">
      <div>
        <h2>
          <?=$item1['name'] ?>
        </h2>
      </div>
      <a  href="<?=DOMAIN?>catalog/sub_catalog/<?=$item1['url_category']?>/"><img src="<?=DOMAIN?><?=$item1['foto_category']?>" style=""></a> </div>
    <? endforeach; ?>
  </div>
</div>
<? endforeach; ?>

<?php
echo "<pre>";
print_r($content);
echo "</pre>";
?>