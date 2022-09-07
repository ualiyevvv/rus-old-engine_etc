// JavaScript Document

function add_basket(var3) { 
 var var4 = $(var3).attr("data-product-guid");
 var count = encodeURI(document.getElementById('i2').value);
          $.ajax({ type: 'POST', url: 'index.php', data: { metod: 'ajax', PageAjax: 'basket', var4: var4, count: count}, success: function(response){
                    $('#basket_count_good').html(response.basket_count_good), $('#basket_count').html(response.basket_count), $('#basket_price').html(response.basket_price);
                 },
				 dataType:"json"
          });
   }

function clear_basket() { 
          $.ajax({ type: 'POST', url: 'index.php', data: { metod: 'ajax', PageAjax: 'clear_basket'}, success: function(response){
                    $('#basket_count_good').html(response.basket_count_good), $('#basket_count').html(response.basket_count), $('#basket_price').html(response.basket_price);
                 },
				 dataType:"json"
          });
   }

