function mostrarOcultar(){
document.getElementById("ocultar").style.display="block";
document.getElementById("leer").style.display="none";
}

function mostrarLeer(){
document.getElementById("leer").style.display="block";
document.getElementById("ocultar").style.display="none";
}

function guardarMensaje(){

const mensaje =
document.getElementById("mensaje").value;

localStorage.setItem(
"mensajeOculto",
mensaje
);

alert("Mensaje guardado");
}

function leerMensaje(){

const mensaje =
localStorage.getItem(
"mensajeOculto"
);

document.getElementById(
"resultado"
).innerText = mensaje || "No existe mensaje";
}