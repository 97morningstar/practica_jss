


document.addEventListener('mousedown', function(event){
	if(event.target.id ==='divo')
	event.target.className = 'moviendo';
});

document.addEventListener('mousemove', function(event){
	if(event.target.className ==='moviendo'){
		event.target.style.top = event.clientY;
		event.target.style.left = event.clientX;

			console.log(event.target.style.top, event.target.style.left );
	}


});

document.addEventListener('dragend', function(event){
	if(event.target.className ==='moviendo'){
		event.target.className = 'quieto';
	}
});

































/*********** form crear nodo **************************************/   /****** ojo por aqui esto dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );*****************/

          /** prueba **/

          var i = 100;
     /* muy imporante variable no borrar */ var ids = 'e';

          /******* fin de la prueba ****/

document.getElementById('crear_nodo').addEventListener('click', function(){
	document.getElementById('form_crear_nodo').style.display = "block";
});

document.getElementById('button_form_crear_nodo_ok').addEventListener('click', function(){
	document.getElementById('form_crear_nodo').style.display = "none";

/******* crear elemento  de acuerdo a ... ****************/
	var node_text = document.getElementById('texto_nodo');
	var node_nombre = document.getElementById('nombre_nodo_crear');

	var node_text_value = node_text.value;
	var node_nombre_value = node_nombre.value;


	document.getElementById('content').innerHTML += "<div style='width: 100px; height: 100px; background-color: red; top: "+ i + "px; left: "+ i + "px;  /*border-radius:50%;*/' id='divo' draggable='true'><div draggable='true' class='m'>" + node_text_value + "</div></div>";

i+=100;

//	document.appendChild('<div style="width: 400px; height: 400px; background-color: red;" id="divo" draggable="true"></div>')


node_text.value = "";
node_nombre.value = "";


});

document.getElementById('button_form_crear_nodo_cancelar').addEventListener('click', function(){
	document.getElementById('form_crear_nodo').style.display = "none";
});


/*********** form crear conexion ***********************************/


document.getElementById('crear_conexion').addEventListener('click', function(){  /****** ver q hallan mas d 2 nodos para conectarlos ******/
	document.getElementById('form_crear_conexion').style.display = "block";
});

document.getElementById('button_form_crear_conexion_ok').addEventListener('click', function(){
	document.getElementById('form_crear_conexion').style.display = "none";
});

document.getElementById('button_form_crear_conexion_cancelar').addEventListener('click', function(){
	document.getElementById('form_crear_conexion').style.display = "none";
});

/*
var p_el = document.getElementById('pp');*/


