//encriptar----------------------------------------------------------------------------
function encriptacion(letras) {
    letrasArray = letras.split("");
    letrasCodificada = [];
    for (var i = 0; i < letrasArray.length; i++){
        if (letrasArray[i] == "a"){
            letrasArray[i] = "ai";
            letrasCodificada.push(letrasArray[i]);
        } else if (letrasArray[i] == "e"){
            letrasArray[i] = "enter";
            letrasCodificada.push(letrasArray[i]);        
        } else if (letrasArray[i] == "i"){
            letrasArray[i] = "imes";
            letrasCodificada.push(letrasArray[i]);
        } else if (letrasArray[i] == "o"){
            letrasArray[i] = "ober";
            letrasCodificada.push(letrasArray[i]);
        } else if (letrasArray[i] == "u"){
            letrasArray[i] = "ufat";
            letrasCodificada.push(letrasArray[i]);
        } else {
            letrasCodificada.push(letrasArray[i]);
        }
    }
    letrasFinal = letrasCodificada.join("");
    return letrasFinal
}

window.addEventListener("load",boton_encriptar)

function boton_encriptar(){
    document.querySelector("#encriptar").addEventListener("click",encriptar)
}

function encriptar(){
    var frase_entrada = document.querySelector("#texto_entrada").value;
    frase = frase_entrada.toLowerCase();
    encriptacion(frase);
    document.querySelector("#texto_salida").innerHTML = letrasFinal;
    document.getElementById("boton_copiar").style.display = "show";
    document.getElementById("boton_copiar").style.display = "inherit";
}

//desencriptar---------------------------------------------------------------------
function desencriptacion(letras) {
    var letras_inicial = letras.split(" ")
    var letrasDecodificadas = [];
    for(var i = 0; i < letras_inicial.length; i++){
            var letras_a = letras_inicial[i].replace(/ai/igm , 'a');
            var letras_e = letras_a.replace(/enter/igm, 'e');
            var letras_i = letras_e.replace(/imes/igm, 'i');
            var letras_o = letras_i.replace(/ober/igm, 'o');
            var letras_u = letras_o.replace(/ufat/igm, 'u');
        letrasDecodificadas.push(letras_u);
    }
    letrasFinal = letrasDecodificadas.join(" ");
    return letrasFinal;
}

window.addEventListener("load",boton_desencriptar)

function boton_desencriptar(){
    document.querySelector("#desencriptar").addEventListener("click",desencriptar)
}

function desencriptar(){
    var frase_entrada = document.querySelector("#texto_entrada").value;
    frase = frase_entrada.toLowerCase();
    desencriptacion(frase);
    document.querySelector("#texto_salida").innerHTML = letrasFinal;
    document.getElementById("boton_copiar").style.display = "show";
    document.getElementById("boton_copiar").style.display = "inherit";
}

//copiar---------------------------------------------------------------------
function copy() {       
    let copyText = document.querySelector('#texto_salida').innerText;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    textArea.remove();
}

//seleccionar caracteres------------------------------------------------------
function caracteresValidos(string){
    var out = '';
    var filtro = 'abcdefghijklmnopqrstuvwxyz ';	
    for (var i=0; i<string.length; i++){
        if (filtro.indexOf(string.charAt(i)) != -1) {
	        out += string.charAt(i);
        }
    }
    return out;
}
