<?php 


$config = include_once(__DIR__ . '/config.php');
include_once(__DIR__ . '/includes.php');

$app = new App($config);
include_once(__DIR__ . "/routes.php");


$app->process();





