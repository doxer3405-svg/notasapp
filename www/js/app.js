function mostrarPantalla(id){

    document.querySelector(".container").style.display = "none";

    document.getElementById("ocultar").style.display = "none";
    document.getElementById("leer").style.display = "none";
    document.getElementById("historial").style.display = "none";

    document.getElementById(id).style.display = "block";
}

function volverInicio(){

    document.querySelector(".container").style.display = "block";

    document.getElementById("ocultar").style.display = "none";
    document.getElementById("leer").style.display = "none";
    document.getElementById("historial").style.display = "none";
}

function guardarMensaje(){

    let mensaje = document.getElementById("mensaje").value;

    if(mensaje === ""){
        alert("Escribe un mensaje");
        return;
    }

    alert("Mensaje preparado correctamente");
}