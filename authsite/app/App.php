<?php

namespace app;
use app\Database;

class App {
    public static $db = null;
    public static $routes = [];
    public static $route = null;
    
    public function __construct($config) {
        $this->db = new Database((object) $config['database']);
        $this->routes = include(dirname(__DIR__) . "../routes.php");

        $this->process();
    }

    public function process() {
        foreach($this->routes as $link=>$route) {
            if($link == $_SERVER['REQUEST_URI']) {
                $this->route = new $route();
                echo $this->route->render();
            }
        }
    }
}