function encriptar(){

    var mensaje = document.getElementById ("mensajeEncriptado").value.toLowerCase();


    var mensajeEncriptado = mensaje.replace(/e/img,"enter");
    var mensajeEncriptado = mensajeEncriptado.replace(/o/img,"ober");
    var mensajeEncriptado = mensajeEncriptado.replace(/i/img,"imes");
    var mensajeEncriptado = mensajeEncriptado.replace(/a/img,"ai");
    var mensajeEncriptado = mensajeEncriptado.replace(/u/img,"ufat");

    document.getElementById("mensajeDesencriptado").innerHTML=mensajeEncriptado;
    document.getElementById("botonCopiar").style.display="show";
    document.getElementById("botonCopiar").style.display="inherit";
} 

function desencriptar(){

    var mensaje = document.getElementById ("mensajeEncriptado").value.toLowerCase();


    var mensajeEncriptado = mensaje.replace(/enter/img,"e");
    var mensajeEncriptado = mensajeEncriptado.replace(/ober/img,"o");
    var mensajeEncriptado = mensajeEncriptado.replace(/imes/img,"i");
    var mensajeEncriptado = mensajeEncriptado.replace(/ai/img,"a");
    var mensajeEncriptado = mensajeEncriptado.replace(/ufat/img,"u");

    document.getElementById("mensajeDesencriptado").innerHTML=mensajeEncriptado;
} 


function copiar(){

    var contenido = document.querySelector("#mensajeDesencriptado");
    contenido.select()
    document.execCommand("Copy");
}

window.addEventListener("load",()=>{
    const currentDate = new Date();
    currentYear.innerText = currentDate.getFullYear()
    });
