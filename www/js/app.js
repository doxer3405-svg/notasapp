function mostrarOcultar(){
    document.getElementById("ocultar").style.display="block";
    document.getElementById("leer").style.display="none";
}

function mostrarLeer(){
    document.getElementById("leer").style.display="block";
    document.getElementById("ocultar").style.display="none";
}

function guardarMensaje(){

    const file =
    document.getElementById("imagen").files[0];

    if(!file){
        alert("Selecciona una imagen");
        return;
    }

    const mensaje =
    document.getElementById("mensaje").value;

    const password =
    document.getElementById("password").value || "imagevault";

    const lector = new FileReader();

    lector.onload = function(e){

        localStorage.setItem(
            "mensajeOculto",
            cifrarMensaje(
                mensaje,
                password
            )
        );

        document.getElementById("preview").src =
        e.target.result;

        document.getElementById("preview").style.display =
        "block";

        alert("Mensaje protegido");
    };

    lector.readAsDataURL(file);
}