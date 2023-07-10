$(document).ready(function(){
	//SLIDER

	if(window.location.href.indexOf("index")>-1){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    responsive: true
  });
}

  //POST
if(window.location.href.indexOf("index")>-1){
  var post=[
  	{
  		title:"Prueba de titulo1",
  		date:'Publicado el dia ' +moment().format("dddd")+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
  		content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  	},
  	{
  		title:"Prueba de titulo2",
  		date:'Publicado el dia ' +moment().format("dddd")+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
  		content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  	},
  	{
  		title:"Prueba de titulo3",
  		date:'Publicado el dia ' +moment().format("dddd")+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
  		content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  	},
  	{
  		title:"Prueba de titulo4",
  		date:'Publicado el dia ' +moment().format("dddd")+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
  		content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  	},
  	{
  		title:"Prueba de titulo5",
  		date:'Publicado el dia ' +moment().format("dddd")+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
  		content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  	},
  	]

  	post.forEach((item, index)=>{
  		var post=`
  		<article class="post">
					<h2>${item.title}</h2>
					<span class="fecha">${item.date}</span>
					<p>
					${item.content}
					</p>
					<a href="#" class="button-more">Leer mas</a>				
				</article>
  		`;
  		$("#post").append(post);
  	});
  }

  	  	//SELECTOR DE TEMA
  	var theme=$("#theme");
  	$("#to-green").click(function(){
  		theme.attr("href","css/green.css");
  	});
  	$("#to-blue").click(function(){
  		theme.attr("href","css/blue.css");
  	});
  	$("#to-red").click(function(){
  		theme.attr("href","css/red.css");
  		
  	});
  	//SCROLL
  	$(".subir").click(function(e){
  		e.preventDefault();
  		$("html,body").animate({
  			scrollTop:0
  		},500);
  		return false
  	});
  	//LOGIN FALSO 
  	


  	$("#login form").submit(function(){
  		var form_name= $("#form_name").val();
  		localStorage.setItem("form_name",form_name);
  	});
  		var form_name=localStorage.getItem("form_name");
  		if(form_name!=null&&form_name!="undefined"){
  			var about_parrafo=$("#about p")
  	about_parrafo.html("<br><strong>Bienvenido,"+form_name+"<strong>");
  	about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>"); 

  	$("#login").hide();

  	$("#logout").click(function(){
  		localStorage.clear();
  		location.reload();
  	});
  
  }
  //ACORDEON

 if(window.location.href.indexOf("about")>-1){

$("#acordeon").accordion();
}

//RELOJ

 if(window.location.href.indexOf("reloj")>-1){

 	setInterval(function(){

		var reloj=moment().format('h:mm:ss a'); // March 10th 2023, 12:16:49 pm
		$("#reloj").html(reloj);

 	},1000);
	 
 }

 //VALIDACION 
 if(window.location.href.indexOf("contact")>-1){

$("form input[name='date']").datepicker();

$.validate({
lang:'en'
});

 }




});