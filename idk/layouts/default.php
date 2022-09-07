<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Магазин</title>

    <link href="/dist/bundle.css" rel="stylesheet" />
</head>
<body>
    <div class="header">
        <div class="container">
            <div class="header__left">
                <a href="/">
                    <?php require(dirname(__DIR__). "/assets/img/logo.svg"); ?>
                    <span>IP:Store</span>
                </a>
            </div>
            <div class="header__right">
                <ul>
                    <li>
                        <a href="/catalog">
                            Каталог продукций
                        </a>
                    </li>
                    <li>
                        <a href="/login">
                            Авторизация
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>    

    <div class="wrapper">
        <div class="container">
            <?= $content; ?>
        </div>
    </div>

    <script src="./dist/bundle.js"></script>
</body>
</html>