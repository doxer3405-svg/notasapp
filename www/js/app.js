function mostrarPantalla(id){

document.querySelector(".container").style.display="none";

document.getElementById("ocultar").style.display="none";
document.getElementById("leer").style.display="none";
document.getElementById("historial").style.display="none";

document.getElementById(id).style.display="block";
}

function volverInicio(){

document.querySelector(".container").style.display="block";

document.getElementById("ocultar").style.display="none";
document.getElementById("leer").style.display="none";
document.getElementById("historial").style.display="none";
}

function ocultarMensaje(){

const archivo =
document.getElementById("imagenOcultar").files[0];

if(!archivo){
alert("Selecciona una imagen");
return;
}

const mensaje =
document.getElementById("mensaje").value;

if(!mensaje){
alert("Escribe un mensaje");
return;
}

const lector = new FileReader();

lector.onload = function(e){

const img = new Image();

img.onload = function(){

const canvas =
document.getElementById("canvas");

const ctx =
canvas.getContext("2d");

canvas.width = img.width;
canvas.height = img.height;

ctx.drawImage(img,0,0);

localStorage.setItem(
"mensajeOculto",
mensaje
);

const nuevaImagen =
canvas.toDataURL("image/png");

const preview =
document.getElementById("preview");

preview.src = nuevaImagen;
preview.style.display="block";

alert("Imagen creada");
};

img.src = e.target.result;
};

lector.readAsDataURL(archivo);
}

function leerMensaje(){

const mensaje =
localStorage.getItem("mensajeOculto");

if(!mensaje){

document.getElementById("resultado")
.innerHTML =
"No se encontró mensaje";

return;
}

document.getElementById("resultado")
.innerHTML =
"<h3>"+mensaje+"</h3>";
}