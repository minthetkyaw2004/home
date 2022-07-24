var prevScroll = window.pageYOffset;
window.onscroll = function scrollPage(){
    var currentScroll = window.pageYOffset;
    if(currentScroll > prevScroll){
        document.getElementById("navigation").style.marginTop="-30px"
    }else{
        document.getElementById("navigation").style.marginTop="50px"
    }
    return;
}
                                                    