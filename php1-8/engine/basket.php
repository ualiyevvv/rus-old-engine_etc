<?php

function basket($isAuth)
{

	
	if ($isAuth)
	{
		basketIsAuth();
	}
	
	
	if ($_POST['PageAjax'] == 'basket')			//Добавление товара в корзину
	{
		$result = addGoods($isAuth);
	}
	
	if ($_POST['PageAjax'] == 'clear_basket')  //Очистка корзины
	{
		ClearBasket();
	}
	
	return $result;
}


//В случае, если пользователь авторизован, то берем корзину из БД и сохраняем ее в сессии
function basketIsAuth()
{
	
	$id_user = $_SESSION['IdUserSession'];
	$sql = "select * from basket where id_user = (select id_user from users_auth where hash_cookie = '$id_user')";
	$basket_db = getAssocResult($sql, $link);
	foreach ($basket_db as $key => $value)
	{
		$basket[$value['ID_UUID']] = $value['count'];
	}
//	$_SESSION['basket'] = $basket;
}

//Соединяем корзину из сессии с корзиной из cookie
function BasketSessionCookie()
{
	if ($_SESSION['basket'])
	{
		$mass_basket_json = json_decode($_COOKIE['basket'],true);
		if (is_array($mass_basket_json))
		{
			array_merge($mass_basket_json, $_SESSION);
		}
	}
}


//Добавление товара в корзину
function addGoods($isAuth)
{		
	
	$basket = $_SESSION['basket'];
	
	$count_goods = $_POST['count'];
	$data_product_guid = $_POST['var4'];
	$basket[$data_product_guid] = $count_goods;
	$basket_count_good = count($basket);
	$basket_count = 666;
	
	if ($isAuth)
	{
		$IdUserSession = $_SESSION['IdUserSession'];
		
		$link = getConnection();
		
		$data_product_guid = mysqli_real_escape_string($link, $data_product_guid);
		$count_goods = mysqli_real_escape_string($link, $count_goods);
		
		$sql = "select * from basket where ID_UUID = '$data_product_guid' and id_user = (select id_user from users_auth where hash_cookie = '$IdUserSession')";
		$goods_basket = getRowResult($sql, $link);
		$id = $goods_basket['id'];
		if ($goods_basket)  //Если товар уже имеется в колрзине
		{
			$sql = "update basket set count = '$count_goods' where id = $id";
			$goods_basket = executeQuery($sql,$link);
		}
		else //Если товара нет в корзине
		{
			$sql = "insert into basket (id_uuid, count, id_user) value ('$data_product_guid', $count_goods, (select id_user from users_auth where hash_cookie = '$IdUserSession'))";
			$goods_basket = executeQuery($sql, $link);
		}

	}
	
			
	//Получим цену товара	
	$link = getConnection();
	$data_product_guid = mysqli_real_escape_string($link, $data_product_guid);
	$sql = "select price from goods where ID_UUID = '$data_product_guid'";
	$goods_price = getRowResult($sql,$link)['price'];
	
	//Стоимость корзины	
	$basket_price = 100;
	
	//Составим массив для отправки в браузер
	$result['basket_count_good'] = $basket_count_good;
	$result['basket_count'] = $basket_count;
	$result['basket_price'] = $basket_price;	
	
	$_SESSION['basket'] = $basket;
	$mass_basket_json = json_encode($basket);
	setcookie('basket', $mass_basket_json, time() + 3600 * 24 * 30 * 12, '/');
	
	return $result;
}


//Очистка корзины
function ClearBasket()
{
		$result['basket_count_good'] = 0;
		$result['basket_count'] = 0;
		$result['basket_price'] = 0;
		setcookie('basket','', time() - 3600 * 24 * 365,'/');	
		unset($_SESSION['basket']);
		
		
		
		return $result;
}

?>
