<?php

function auth()
{
	$isAuth = 0;
	if ($_POST['SubmitLogin'])   //Если попытка авторизации через форму, то пытаемся авторизоваться
	{
		$isAuth = authWithCredential($_POST['login'], $_POST['pass']);
	//	echo "Авторизация по форме";
	}
	elseif ($_SESSION['IdUserSession'])    //иначе пытаемся авторизоваться через сессии
	{
		$isAuth = checkAuthWithSession($_SESSION['IdUserSession']);
	//	echo "Авторизация по сессии";
	}
	else // В последнем случае пытаемся авторизоваться через cookie
	{
		$isAuth = checkAuthWithCookie();
	//	echo "авторизация по cookie";
	}
	
	if ($_POST['ExitLogin'])
	{
		$isAuth = UserExit();	
	}

	if ($isAuth)
	{
		$id_user = $_SESSION['IdUserSession'];
		$sql = "select * from users where id_user = (select id_user from users_auth where hash_cookie = '$id_user')";
		$isAuth = getRowResult($sql, $link);
	}

	return $isAuth;
	
}





/*
Осуществляем удаление всех переменных, отвечающих за авторизацию пользователя.
*/
function UserExit()
{
	//Удаляем запись из БД об авторизации пользователей
	$IdUserSession = $_SESSION['IdUserSession'];
	$sql = "delete from users_auth where hash_cookie = '$IdUserSession'";
	executeQuery($sql);
	
	//Удаляем все переменные сессий
	unset($_SESSION['id_user']);
	unset($_SESSION['IdUserSession']);
	unset($_SESSION['login']);
	unset($_SESSION['pass']);
	
	//Удаляем все переменные cookie
	setcookie('idUserCookie','', time() - 3600 * 24 * 7);

	return $isAuth = 0;
}

/*Авторизация пользователя
при использования технологии хэширования паролей
$username - имя пользователя
$password - введенный пользователем пароль
*/
function authWithCredential($username, $password)
{
	$isAuth = 0;
	
	$link = getConnection();
	$login = mysqli_real_escape_string($link,$username);
//	$passHash = password_hash($password, PASSWORD_DEFAULT);
	$sql = "select id_user, login, pass from users where login = '$login'";
	$user_date = getRowResult($sql, $link);
	
	if ($user_date)
	{
		$passHash = $user_date['pass'];
		$id_user = $user_date['id_user'];
		$idUserCookie = microtime(true) . rand(100,10000000000000);
		if (password_verify($password, $passHash))
		{
			$_SESSION['id_user'] = $id_user;
			$_SESSION['IdUserSession'] = $idUserCookie;
			
			$sql = "insert into users_auth (id_user, hash_cookie, date, prim) values ('$id_user', '$idUserCookie', now(), '123456789')";
			executeQuery($sql);
			$isAuth = 1;
			
			if ($_POST['rememberme'])
			{
				setcookie('idUserCookie',$idUserCookie, time() + 3600 * 24 * 7, '/');
			}
		}
		else
		{
			UserExit();
		}
	}
	else
	{
		UserExit();
	}
	
	return $isAuth;	
}

/* Авторизация при помощи сессий
При переходе между страницами происходит автоматическая авторизация
*/
function checkAuthWithSession($IdUserSession)
{
	$isAuth = 0;
	
	$link = getConnection();
	$hash_cookie = mysqli_real_escape_string($link, $IdUserSession);
	$sql = "select * from users_auth where hash_cookie = '$hash_cookie'";
	$user_date = getRowResult($sql, $link);

	if ($user_date)
	{
		$isAuth = 1;
		$_SESSION['IdUserSession'] = $IdUserSession;
	}
	else
	{
		$isAuth = 0;
		UserExit();
	}


	return $isAuth;
}

function checkAuthWithCookie()
{
	$isAuth = 0;
	
	$link = getConnection();
	$idUserCookie = $_COOKIE['idUserCookie'];
	$hash_cookie = mysqli_real_escape_string($link, $idUserCookie);
	$sql = "select * from users_auth where hash_cookie = '$hash_cookie'";
	$user_date = getRowResult($sql, $link);
	
	if ($user_date)
	{
		checkAuthWithSession($idUserCookie);
		$isAuth = 1;
	}
	else
	{
		$isAuth = 0;
		UserExit();
	}

	return $isAuth;
}



?>