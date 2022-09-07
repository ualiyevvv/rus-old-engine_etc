<?php


class App {
	public static $db = null;
	public $routes = [];
	public function __construct ($config) {

		$dsn = sprintf('mysql:host=%s;dbname=%s', $config['DB_HOST'],$config['DB_NAME']);
		$pdo = new PDO($dsn, $config['DB_USER'], $config['DB_PASSWORD']);

		App::$db = $pdo;  

	}

	public function process() {
		$currentRoute = null;
		$routeExists = false;
		$newPath = '/'. $_GET['path'];

		foreach($this->routes as $route) {
			if($route['link'] == $newPath) {
				$controller = new $route['class'];
				$currentRoute = $controller->{$route['classMethod']}();
				$routeExists = true;
			}
		}

		if(!$routeExists) {
			echo '404';
		}
	}

	// Routes

	public function addRoute($link, $method, $class, $classMethod) {
		array_push($this->routes, [
			"link" => $link,
			"method" => $method,
			"class" => $class,
			"classMethod" => $classMethod
		]);

		return true;
	}
}