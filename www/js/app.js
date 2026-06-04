cargar();

function guardar(){

let nota=document.getElementById("nota").value;

if(nota==""){
return;
}

let notas=
JSON.parse(localStorage.getItem("notas"))
|| [];

notas.push(nota);

localStorage.setItem(
"notas",
JSON.stringify(notas)
);

document.getElementById("nota").value="";

cargar();
}

function cargar(){

let notas=
JSON.parse(localStorage.getItem("notas"))
|| [];

let html="";

for(let n of notas){

html += "<li>"+n+"</li>";

}

document.getElementById("lista").innerHTML=html;

}