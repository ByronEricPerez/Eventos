//TECLA ENTER


window.addEventListener ("keydown" , presionarTecla);

function presionarTecla(e){


    // console.log(e.key);

    if(e.keyCode === 13){
        e.preventDefault();

        alert("Feliz Navidad inmundo animal y feliz año nuevo");
    }


}


//CAPTURA NOMBRE Y CAMBIA HTML

let userName = prompt("Ingrese nombre");

var elementoB = document.getElementsByTagName("b");
elementoB[0].innerHTML = userName;


//CREACION DE CONTENIDO MEDIANTE CLICK, IMAGEN GIF!!
function felizNavidad(){
    
    var elementoH2 = document.createElement("h2");
    var imagen = document.createElement("img");
    elementoH2.appendChild(imagen);
    imagen.src = "/feliznavidad.jpg";
    elementoH2.setAttribute("align","center");
    document.getElementById("navidad").appendChild(elementoH2);

}


let boton = document.getElementById("boton");
boton.addEventListener("click" , felizNavidad);



