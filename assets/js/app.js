var api = {
	url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var cargarPagina = function(){
   cargarAlumnas(); 
   verLista();
};

var $listaHtml = $("#lista-asistencia");

var cargarAlumnas = function(){ 
    $.getJSON(api.url,function(alumnas){ 
        alumnas.forEach(verLista);
    });
};


var verLista = function (alumna){
    var nombre = alumna.name;
    var apellido_paterno = alumna.pLastName; 
    var apellido_materno = alumna.mLastName; 
    console.log(nombre);
    
    var $ol = $("<ol />"); 
    console.log($ol);
    var $li = $("<li />");
    $li.text(nombre +  ' ' + apellido_paterno + ' ' + apellido_materno);
    var $checkbox = $("<input type='checkbox'/>"); 
    
    $li.append(" ", $checkbox);
    $listaHtml.append($li);
}

$(document).ready(cargarPagina);