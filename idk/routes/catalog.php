<?php
    $catalogArray = json_decode(file_get_contents(dirname(__DIR__) . "/database/catalog.json"));

    $specsSelectAvailable = [
        "colors" => [
            "generate" => function($select) {
                $count = count((array) $select);
                $availableColors = implode(", ", array_map(function($value) {
                    return $value->label;
                }, ((array) $select)));

                return <<<HTML
                    <b>Доступно в {$count} цветах:</b>
                    <span>{$availableColors}</span>
HTML;
            }
        ],
        "memory" => [
            "generate" => function($select) {
                $availableMemory = implode(", ", array_map(function($value) {
                    return $value->label;
                }, ((array) $select)));

                return <<<HTML
                    <b>Доступно памяти:</b>
                    <span>{$availableMemory} Гб.</span>
HTML;
            }
        ]
    ];
    
    function specsSelectGenerate($key, $select) {
        global $specsSelectAvailable;

        $generateFunction = $specsSelectAvailable[$key];
        return $generateFunction['generate']($select);
    }
?>

<div class="catalog">
    <div class="container">
        <div class="page__header">
            <div class="page__header--left">
                <h3>Каталог продукции</h3>
            </div>
            <div class="page__header--line"></div>
        </div>
        <div class="catalog__items">
            <?php foreach($catalogArray as $index=>$item) { ?>
                <div class="catalog__items--item--wrapper">
                    <div class="catalog__items--item" data-item-id="<?= $index; ?>">
                        <div class="catalog__items--item--picture">
                            <img src="<?= $item->picture; ?>" />
                        </div>
                        <div class="catalog__items--item--meta">
                            <h3><?= $item->title; ?></h3>
                            <span><?= number_format($item->price, 0, " ", " "); ?> тг.</span>
                        </div>
                        <div class="catalog__items--item--specs">
                            <?php foreach($item->specs_select as $key=>$select): ?>
                                <div class="catalog__items--item--specs--item">
                                    <?= specsSelectGenerate($key, $select); ?>
                                </div>
                            <?php endforeach; ?>

                            <?php foreach($item->specs as $key=>$spec): ?>
                                <div class="catalog__items--item--specs--item">
                                    <b><?= $spec->label; ?></b>
                                    <span><?= $spec->value; ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <div class="catalog__items--item--button">
                            <button type="button" class="button button-default">Купить</button>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</div>

<script>
    let catalogJSON = <?= json_encode($catalogArray); ?>;
</script>