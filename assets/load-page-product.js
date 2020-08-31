$(document).ready(function(){
  console.log("ready");
  //$( "#load-product-page" ).load( "http://theme-base.myshopify.com/products/product-example-7" );
  $.ajax({
    url : "http://theme-base.myshopify.com/cart",
    type : 'get',
    success : function(reponse) {
     //console.log(reponse); 
     var doc = document.implementation.createHTMLDocument('load product');
     doc.documentElement.innerHTML = reponse;
    }
  });
});