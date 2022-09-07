<?php

//Константы ошибок
define('ERROR_NOT_FOUND', 1);
define('ERROR_TEMPLATE_EMPTY', 2);


//Функция получает переменные в зависимости от выбранной страницы. news или newspage или feedback
function prepareVariables($page_name){
	
	//Обработаем страницу, которую будем открывать
    switch ($page_name){
        case "index":
				$vars['content'] = '../templates/index.php';
				$vars['new_product'] = NewProduct();
				$vars['top_product'] = TopProduct();
				$vars['sale_product'] = SaleProduct();
			break;	
			
		case "contact":
        
		break;
		
				
        case "catalog":
				
				if (!$_GET['action'])
				{
					$vars['content'] = '../templates/catalog/index.php';
					$vars['catalog'] = Catalog();
				}
				else
				{
					$vars['content'] = '../templates/catalog/sub_catalog.php';
					$vars['sub_catalog'] = Sub_Catalog();
				}
				
            break;
			
        case "good":
				$vars['content'] = '../templates/good/good.php';
				
				$vars['good'] = Good();
				$vars['new_product'] = $vars['good']['new_product'];
				$vars['top_product'] = $vars['good']['top_product'];
				
            break;
			
        case "article":

            break;
			
		case "contact":

            break;	
					
		case "register":
			
            break;
    }

    return $vars;
}

function NewProduct()
{
	$sql = 'select * from goods order by date desc limit 6';
	return getAssocResult($sql);
}

function TopProduct()
{
	$sql = 'select * from goods order by view, date desc limit 3';
	return getAssocResult($sql);	
}

function SaleProduct()
{
	$sql = 'select * from goods where status ="2" order by view desc limit 3';
	return getAssocResult($sql);	
}

function Catalog()
{
	$result = getAssocResult('SELECT * FROM `categories` where parent_id = "0";');
	foreach ($result as $key=>$value)
	{
		$result[$key]['sub_category'] = getAssocResult('SELECT * FROM `categories` where parent_id = "'. $value['id_category'] .'";');
	}
	return $result;
}

function Sub_Catalog()
{
	$data = $_GET;
	$id_category = getAssocResult('SELECT * FROM `categories` where url_category = "'. $data['id'] .'";');
	$parent_category = getAssocResult('SELECT * FROM `categories` where id_category = "'. $id_category[0]['parent_id'] .'";');
	$sub_catalog = getAssocResult('SELECT * FROM `goods` where id_category = "'. $id_category[0]['id_category'] .'";');
	$result = $id_category;	
	$result[0]['catalog'] = $sub_catalog;
	$result[0]['parent'] = $parent_category;
	return $result; 
}

function Good()
{
	$data = $_GET;
	executeQuery('UPDATE `goods` SET `view` = `view` + 1 where id_good = "'. $data['id'] .'"');
	$result['product'] = getAssocResult('select * from goods where id_good = "'. $data['id'] .'"');
	$result['product'] = $result['product'][0];
	$result['top_product'] = getAssocResult('select * from goods order by view desc, date desc limit 3;');
	$result['new_product'] = getAssocResult('select * from goods order by date desc limit 3;');
		
	$kroshki[] = $result['product']['id_category'];
	
	$kroshki[] = getAssocResult('select parent_id, name, url_category from categories where id_category = "'. $kroshki['0'] .'"')[0];
	$kroshki[] = getAssocResult('select parent_id, name, url_category from categories where id_category = "'. $kroshki['1']['parent_id'] .'"')[0];
		
	$result['kroshki'] = $kroshki;
		
	
	return $result;
	
}

?>
