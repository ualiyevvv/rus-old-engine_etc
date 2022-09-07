<?php

namespace app;
use PDO;

class Database {
    public $db ;

    public function __construct($config) {
        try {
            $this->db = new \PDO(sprintf("mysql:host=%s;database=%s", $config->host, $config->database),
                $config->user, $config->password);

            return $this->db;
        } catch(\Exception $e) {
            throw $e;
        }
    }
}