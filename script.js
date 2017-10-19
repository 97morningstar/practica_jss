

	document.addEventListener('mousedown', function(el){
		if(el.target.classList.contains('quieto')){   
			el.target.classList.remove("quieto");                                                                                               
			el.target.className += ' moviendo'; 
				console.log(el.target.className, el);

				el.target.style.cursor = '-webkit-grabbing';
		}
	
	});

	document.addEventListener('mousemove', function(el){
		
			var x = event.clientX;
			var y = event.clientY;
		console.log(x, y);

		if(el.target.classList.contains('moviendo')){
			el.target.style.top = el.clientX + 'px';
			el.target.style.left = el.clientY + 'px';

			console.log(el);
			
		}
	});

document.addEventListener('dragend', function(el){
	if(el.target.classList.contains('moviendo')){   
			el.target.classList.remove("moviendo");                                                                                               
			el.target.className += ' quieto'; 
				console.log(el.target.className, el);
		}
});

document.addEventListener('mouseup', function(el){
	if(el.target.classList.contains('moviendo')){   
			el.target.classList.remove("moviendo");                                                                                               
			el.target.className += ' quieto'; 
				console.log(el.target.className, el);
		}
});


   
	//document.addEventListener()


























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


	document.getElementById('content').innerHTML += "<div style='width: 100px; height: 100px; background-color: red; top: "+ i + "px; left: "+ i + "px;  /*border-radius:50%;*/' class='divo quieto'></div>";






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


