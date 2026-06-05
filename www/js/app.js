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

function textoABinario(texto){

let binario="";

for(let i=0;i<texto.length;i++){

binario += texto.charCodeAt(i)
.toString(2)
.padStart(8,"0");
}

binario += "1111111111111110";

return binario;
}

function binarioATexto(binario){

let resultado="";

for(let i=0;i<binario.length;i+=8){

let byte = binario.substr(i,8);

if(byte==="11111110"){
break;
}

resultado += String.fromCharCode(
parseInt(byte,2)
);
}

return resultado;
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

const imageData =
ctx.getImageData(
0,
0,
canvas.width,
canvas.height
);

const datos =
imageData.data;

const binario =
textoABinario(mensaje);

for(let i=0;i<binario.length;i++){

datos[i*4] =
(datos[i*4] & 254)
| parseInt(binario[i]);
}

ctx.putImageData(
imageData,
0,
0
);

const nuevaImagen =
canvas.toDataURL("image/png");

const preview =
document.getElementById("preview");

preview.src = nuevaImagen;
preview.style.display="block";

const enlace =
document.createElement("a");

enlace.href = nuevaImagen;
enlace.download =
"ImageVault.png";

enlace.click();

alert(
"Imagen guardada correctamente"
);
};

img.src = e.target.result;
};

lector.readAsDataURL(archivo);
}

function leerMensaje(){

const archivo =
document.getElementById("imagenLeer").files[0];

if(!archivo){
alert("Selecciona una imagen");
return;
}

const lector =
new FileReader();

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

const imageData =
ctx.getImageData(
0,
0,
canvas.width,
canvas.height
);

const datos =
imageData.data;

let binario="";

for(let i=0;i<datos.length;i+=4){

binario +=
(datos[i] & 1);

if(
binario.endsWith(
"1111111111111110"
)
){
break;
}
}

const mensaje =
binarioATexto(binario);

document.getElementById(
"resultado"
).innerHTML =
"<h3>"+mensaje+"</h3>";
};

img.src = e.target.result;
};

lector.readAsDataURL(archivo);
}