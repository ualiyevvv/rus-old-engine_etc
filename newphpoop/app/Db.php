<?php

namespace app;

use PDO;

class Db {

	private $db;

	public function __construct($config){
		$this->db = new \PDO("mysql:host={$config['host']};dbname={$config['database']}", $config['user'], $config['password'],[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
	}

	public function select(){
		$arr = [];
		$stmt = $this->db->query("SELECT * FROM info");
		while ($row = $stmt->fetch()) {
		    $arr[] = $row;
		}
		return $arr;
	}


}
