
/* Regras Codificador:
"e" é convertido para "enter"
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação
*/
var bottonCodificar= document.querySelector("#btn-cripto");
bottonCodificar.addEventListener("click", function(event){
  event.preventDefault();
  var areText=document.querySelector("#input-texto");
  var texto=areText.value;
  var novoTexto=codificaTexto(texto);
  var msgOut=document.querySelector("#msg");
  msgOut.value=novoTexto;
  var form=document.querySelector("#cript");
  form.reset();

} );
var bottonCopiar=document.querySelector("#btn-copy");
bottonCopiar.addEventListener("click", function(event){
  var texCopia=document.querySelector("#msg");
  navigator.clipboard.writeText(texCopia.value);
  texCopia.value='';
})

function codificaTexto(texto){
  var novoTexto=texto;
  var tamanho=texto.length
  novoTexto=texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi, "ufat");
/*  for (var i = 0; i < novoTexto.length; i++) {
    console.log(novoTexto.length, i, novoTexto[i]);

    if(novoTexto[i]=='e'){
      novoTexto=includeCode(i,'enter', novoTexto);
      i=i+3;

    }
    else if (novoTexto[i]=='i') {
      novoTexto=includeCode(i, 'imes', novoTexto );
      i=i+2;

    }
    else if (novoTexto[i]=='a') {
      novoTexto= includeCode(i, 'ai', novoTexto);
      i=i+1;


    }
    else if (novoTexto[i]=='o') {
      novoTexto=includeCode(i,'ober', novoTexto);
      i=i+3;


    }
    else if(novoTexto[i]=='u'){
      novoTexto=includeCode(i, 'ufat', novoTexto);
      i=i+3;
    }


  }*/
  return novoTexto;

}
function includeCode(indice,code, texto){
  var novo= texto.substr(0, indice)+code+texto.substr(indice+1);
  return novo;
}



/* Regras Decodificador:
"enter" é convertido para "e"
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação
*/
var bottonDecodificar= document.querySelector("#btn-descripto");
bottonDecodificar.addEventListener("click", function(event){
  event.preventDefault();
  var form=document.querySelector("#input-texto");
  var texto=form.value;
  var novoTexto=decodificaTexto(texto);
  var msgOut=document.querySelector("#msg");
  msgOut.value=novoTexto;
  var formr=document.querySelector("#cript");
  formr.reset();


} );

function decodificaTexto(texto){
  var i=0;
  var novoTexto='';
  novoTexto=texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi,"u");
  return novoTexto;
}
