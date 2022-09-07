<?php


class Content 
{
    public $page="";
    public function __construct($page) {
        $this->page = $page;
    }

    public function getContent(){
        $sql = App::$db->prepare("SELECT * FROM pages WHERE route = ?");
        $sql->execute(array($this->page));
        $content = $sql->fetch(PDO::FETCH_ASSOC);
        return $content['content'];
    }
}