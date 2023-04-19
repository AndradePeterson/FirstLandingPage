window.onscroll = function(){scrollFunction()}

function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.querySelector(".meuHeader").style.height = "5em";
        document.querySelector(".logo").style.height = "5em";
        document.querySelector("#nameLogo").style.height = "1.3em";
    } else{
        document.querySelector(".meuHeader").style.height = "7em";
        document.querySelector(".logo").style.height = "7em";
        document.querySelector("#nameLogo").style.height = "1.3em";
    }
}
