<?php
session_start();

require_once('../config/config.php');
require_once('../engine/functions.php');
require_once('../engine/db.php');
require_once('../engine/autorize.php');
require_once('../engine/basket.php');

$isAuth = auth();

$result = basket($isAuth);

if($_POST['metod'] != 'ajax')
{
	Router($isAuth);
}
else
{
	echo json_encode($result);
}



function Router($isAuth)
{
	$url_array = explode("/", $_SERVER['REQUEST_URI']);
	//Если не указан адрес страницы, то считаем что пользователь зашел на главную страницу
	if ($url_array[1] == "")
	{
		$page_name = "index";
	}
	else
	{
		$page_name = $url_array[1];
		if ($url_array[2])
		{
			$_GET['action'] = $url_array[2];
		}
		
		if ($url_array[3])
		{
			$_GET['id'] = $url_array[3];
		}
	
		
		if (is_numeric($url_array[2])) 
		{
			$_GET['id'] = $url_array[2];
			$_GET['action'] = 'good';
		} 
	
	
	}
	
	
	//Получаем содержимое страницы, в зависимости от адреса перехода
	
	foreach(prepareVariables($page_name) as $key=>$value)
	{
		$content[$key] = $value;
	}
	
	
	
	include '../templates/bases.php';	
}

?>
