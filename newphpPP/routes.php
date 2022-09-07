<?php

$app->addRoute("/", "GET", SiteController::class, "index");
$app->addRoute("/about", "GET", SiteController::class, "about");