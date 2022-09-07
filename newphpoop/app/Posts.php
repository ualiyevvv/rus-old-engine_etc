<?php

namespace app;

use app\Db;

class Posts
{
	private $id;
	private $title;
	private $category;
	private $descr_min;
	private $description;
	private $image;
	private $views;
	private $comments;

	private $db;

	public function __construct($config){
		$this->db = new Db($config);

	}
	public function getPosts() {
		return $this->db->select();
	}

	public function addPost($id,$title,$category,$descr_min,$description,$image,$views,$comments){
		$this->id = $id;
		$this->title = $title;
		$this->category = $category;
		$this->descr_min = $descr_min;
		$this->description = $description;
		$this->image = $image;
		$this->views = $views;
		$this->comments = $comments;
	}



}