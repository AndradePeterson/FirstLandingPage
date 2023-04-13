window.onscroll = function(){scrollFunction()}

function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.querySelector(".meuHeader").style.height = "80px";
        document.querySelector(".logo").style.height = "80px";
        document.querySelector("#nameLogo").style.font = "40px";
    } else{
        document.querySelector(".meuHeader").style.height = "110px";
        document.querySelector(".logo").style.height = "110px";
        document.querySelector("#nameLogo").style.height = "40px";
    }
}

var tituloEnaltecerBrasil = document.getElementById("tituloEnaltecerBrasil");

var opacity = 1; //define a opacidade inicial do elemento

var intervalId = setInterval(function() {
    opacity -= 0.1; //decrementa a opacidade do elemento

    if(opacity <= 0.8){
        opacity = 1; //redefine a opacidade para 1 e inverte a direção da pulsação
    }

    tituloEnaltecerBrasil.style.opacity = opacity;
}, 300);