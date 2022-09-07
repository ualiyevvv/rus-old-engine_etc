<?php

// Did this for layouts
$link = $_SERVER['REQUEST_URI'];
$routes = require("./routes.php");


// Search for routes
// I don't want to put this in any function, so, let it will be here.

$routeFound = false;

ob_start();
foreach($routes as $routeLink=>$file) {
    if($routeLink == $link) {
        require("./routes/" . $file);

        $routeFound = true;
        break;
    }
}

if(!$routeFound) {
    require("./routes/404.html");    
}

$content = ob_get_contents();
ob_get_clean();
include "./layouts/default.php";
