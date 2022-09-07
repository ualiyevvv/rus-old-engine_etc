<?php

use app\App;
use app\Database;

require_once("autoload.php");

$config = require("./config.php");
$app = new App($config);