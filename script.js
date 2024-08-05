const textArea = document.querySelector(".text-area");
const segunda__seccion = document.querySelector(".segunda__seccion");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    segunda__seccion.value = textoEncriptado
    textArea.value = "";
    segunda__seccion.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    segunda__seccion.value = textoEncriptado
    textArea.value = "";
}

function copiarTexto(){
    const copiar = document.querySelector(".segunda__seccion");
    copiar.select();
    navigator.clipboard.writeText(copiar.value);
}

function encriptar(stringEncriptada){
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < llavesEncriptacion.length; i++){
        if(stringEncriptada.includes(llavesEncriptacion[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < llavesEncriptacion.length; i++){
        if(stringDesencriptada.includes(llavesEncriptacion[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0])
        }
    }
    return stringDesencriptada
}