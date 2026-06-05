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

async function guardarMensaje(){

    const archivo =
    document.getElementById("imagen").files[0];

    if(!archivo){
        alert("Selecciona una imagen");
        return;
    }

    const mensaje =
    document.getElementById("mensaje").value;

    const lector =
    new FileReader();

    lector.onload = function(e){

        const img = new Image();

        img.onload = function(){

            const canvas =
            document.getElementById("canvas");

            const ctx =
            canvas.getContext("2d");

            canvas.width =
            img.width;

            canvas.height =
            img.height;

            ctx.drawImage(img,0,0);

            const datos =
            ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            );

            const texto =
            mensaje + "###END###";

            let indice = 0;

            for(
                let i = 0;
                i < datos.data.length;
                i += 4
            ){

                if(
                    indice >= texto.length
                ){
                    break;
                }

                datos.data[i] =
                texto.charCodeAt(
                    indice
                );

                indice++;
            }

            ctx.putImageData(
                datos,
                0,
                0
            );

            const url =
            canvas.toDataURL(
                "image/png"
            );

            const enlace =
            document.getElementById(
                "descarga"
            );

            enlace.href = url;
            enlace.download =
            "imagevault.png";

            enlace.style.display =
            "block";

            enlace.innerText =
            "Guardar imagen";

        };

        img.src =
        e.target.result;

    };

    lector.readAsDataURL(
        archivo
    );
}