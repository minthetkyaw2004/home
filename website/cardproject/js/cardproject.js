function item1(){
    document.getElementById("body").classList.toggle("darkmode");
}
function item2(){
    window.location.href="./cardproject.html#firstfour";
}
function item3(){
    window.location.href="./cardproject.html#secondsix";   
}
function item4(){
    window.location.href="./cardproject.html#bottomseven";
}
function item5(){
    document.getElementById("sidebar").style.left="-180px";
}
function showbar(){
    document.getElementById("sidebar").style.left="-80px";
}
function showbtn(){
    document.getElementById("sidebar-btn").style.display="block";
    document.getElementById("sidebar-btn").style.left="7px";
}
function hidebtn(){
    document.getElementById("sidebar-btn").style.left="-93px";
}

document.getElementById("sidebar-item1").addEventListener("click",function(){
    item1();
})
document.getElementById("sidebar-item2").addEventListener("click",function(){
    item2();
})
document.getElementById("sidebar-item3").addEventListener("click",function(){
    item3();
})
document.getElementById("sidebar-item4").addEventListener("click",function(){
    item4();
})
document.getElementById("sidebar-item5").addEventListener("click",function(){
    item5();
    showbtn();
})
document.getElementById("sidebar-btn").addEventListener("click",function(){
    hidebtn();
    showbar();
})

//cmd line function
function cxtl(){
    document.getElementById("first-topic").classList.add("blinktopic")
    document.getElementById("second-topic").classList.add("blinktopic")
    document.getElementById("bottom-topic").classList.add("blinktopic")

    document.getElementById("frontside1").style.display="none"
    document.getElementById("frontside2").style.display="none"
    document.getElementById("frontside3").style.display="none"
    document.getElementById("frontside4").style.display="none"
    document.getElementById("frontside5").style.display="none"
    document.getElementById("frontside6").style.display="none"
    document.getElementById("frontside7").style.display="none"

    document.getElementById("backside1").style.display="block"
    document.getElementById("backside2").style.display="block"
    document.getElementById("backside3").style.display="block"
    document.getElementById("backside4").style.display="block"
    document.getElementById("backside5").style.display="block"
    document.getElementById("backside6").style.display="block"
    document.getElementById("backside7").style.display="block"

    document.getElementById("end").style.display="block"
}

