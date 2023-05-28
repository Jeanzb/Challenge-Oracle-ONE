
function encriptar(){
    if(document.getElementById("valor1").value.trim()==""){
        alert("No hay ninguna mensaje a encriptar");
    }else{
let valor=document.getElementById("valor1");
        let valor2=valor.value;
        let valor3;
        valor2=valor2.replaceAll('e','enter');
        valor2=valor2.replaceAll('i','imes');
        valor2=valor2.replaceAll('a','ai');
        valor2=valor2.replaceAll('o','ober');
        valor2=valor2.replaceAll('u','ufat');
        let cambiar=document.getElementById("valor2").innerText=valor2;
        let hola3=document.getElementById("botones21").style.display="flex";
        let hola1=document.getElementById("valor2").style.display="inline";
        let hola4=document.getElementById("inicio1").style.display="none";
    }
}


function desencriptar(){
    if(document.getElementById("valor1").value.trim()==""){
        alert("No hay ningun mensaje a desencriptar");
    }else{
        let valor4=document.getElementById("valor1");
        let valor5=valor4.value;
        valor5=valor5.replaceAll('enter','e');
        valor5=valor5.replaceAll('imes','i');
        valor5=valor5.replaceAll('ai','a');
        valor5=valor5.replaceAll('ober','o');
        valor5=valor5.replaceAll('ufat','u');
        let cambiar=document.getElementById("valor2").innerText=valor5;
        let hola3=document.getElementById("botones21").style.display="flex";
        let hola1=document.getElementById("valor2").style.display="inline";
        let hola4=document.getElementById("inicio1").style.display="none";
    }
}

function copiar(){
    let content = document.getElementById("valor2");
    
    content.select();
    document.execCommand('copy');

    alert("Copiado");
}




let encriptar2=document.querySelector(".boton1");
encriptar2.onclick=encriptar;

let desencriptar2=document.querySelector(".boton2");
desencriptar2.onclick=desencriptar;

let copiar3=document.querySelector(".copiar");
copiar3.onclick=copiar;


let hola=document.getElementById("botones21").style.display="none";
let hola1=document.getElementById("valor2").style.display="none";
