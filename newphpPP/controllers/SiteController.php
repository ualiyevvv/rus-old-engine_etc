<?php


class SiteController extends Controller {
	public function index() {
		//$content = new Content();
		require __DIR__ . "/../views/main.php";
	}
	public function about() {
		$content = new Content("about");
		$content->getContent();
		require __DIR__ . "/../views/about.php";
	}
}