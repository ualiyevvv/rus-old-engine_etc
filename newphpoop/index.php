<a href="app/views/add.php">add post</a>
<a href="app/views/main.php">main</a>
<?php

echo "<pre> hello";
//var_dump($_SERVER);
echo "</pre>";

require "app/Db.php";
require "app/Posts.php";

use app\Db;
use app\Posts;

$config = require_once "config.php";

var_dump($posts->getPosts());

