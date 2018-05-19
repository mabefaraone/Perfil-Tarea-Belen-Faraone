$("li").click(function(){

	$("li").toggleClass("active");//Quita y pone la clase que va como parametro
	$("section").toggleClass("hidden");
});

$("form").submit(function(evento){
	evento.preventDefault(); //Con esto se evita que se recargue el formulario
	var contacto={

		"nombre" : $("#nombre").val(),
		"apellido" : $("#apellido").val(),
		"telefono" : $("#telefono").val(),
		"email" : $("#email").val()
	};
	
	guardar(contacto);
	$("#form")[0].reset();
	$("#nombre").focus();



});

function guardar(c){ //guardar contacto
	var fila=	"<tr><td>"+c.nombre+"</td><td>"+c.apellido+"</td><td>"+c.telefono+"</td><td>"+c.email+"</td><td><button title='Modificar'class='btn btn-success'><span class='glyphicon glyphicon-pencil'></span></button><button title='Eliminar'class='btn btn-danger'><span class='glyphicon glyphicon-erase'></span></button>"
	$("tbody").append(fila);
}