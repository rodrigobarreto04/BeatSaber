var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var vjNivel = window.location.search;
var gerarTempo = 1500;

vjNivel = vjNivel.replace('?', '');

if(vjNivel == 'Normal'){
    gerarTempo=1500;
}else{

if(vjNivel == 'Difícil'){
    gerarTempo=1000;
}else{

if(vjNivel == 'Compllicado'){
    gerarTempo=750;
}}
}
function ajustaPalco(){
 altura = window.innerHeight;
 largura = window.innerWidth;

console.log(largura, altura)
}	
ajustaPalco();
var VJcronometro = setInterval(function(){
    tempo -= 1
    if (tempo<0){
        clearInterval(VJcronometro);
        clearInterval(criarbloco);
        window.location.href = "vitoria.html";
    }
    else{
        document.getElementById('meuCronometro').innerHTML=tempo;
    }
    },1000)

function posRandomica(){	
	if(document.getElementById('tempoBloco')){
		document.getElementById('tempoBloco').remove();
	
		if(vidas > 3){
		window.location.href = "finaljogo.html";
		}
		else{
		document.getElementById('v' + vidas).src="imagens/coracao_vazio.png";
		vidas++;
		}
	}

var posx = Math.floor(Math.random()*largura) -90;
var posy = Math.floor(Math.random()*altura)-90;

posx = posx < 0?0:posx;
posy = posy < 0?0:posy;

console.log(posx, posy)


var bloco = document.createElement('img');
bloco.src= 'imagens/bloco.png'
document.body.appendChild(bloco)
bloco.className = tamanhoBloco() + ' ' + ladoAleatorio();

bloco.style.left = posx + 'px';
bloco.style.top = posy + 'px';
bloco.style.position = 'absolute'
bloco.id = 'tempoBloco';
console.log(ladoAleatorio());

bloco.onclick=function(){
	this.remove();
}
}

function tamanhoBloco(){
    var classe = Math.floor(Math.random()*3);
	console.log(classe);

    switch(classe){
        case 0:
            return 'bloc';
        case 1:
            return 'bloc2';
        case 2:
            return 'bloc3';
    }
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random()*2);

    switch(classe){
        case 0:
            return 'LadoA';
        case 1:
            return 'LadoB';
	}
}