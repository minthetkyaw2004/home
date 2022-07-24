let currentPlace = document.querySelector('.current-place');
let allPath = document.querySelectorAll(".map path");

allPath.forEach(function (currentPath){
    currentPath.addEventListener("mouseover",function (){
        allPath.forEach(x=>x.classList.remove("active"));
        currentPath.classList.add("active");
        currentPlace.innerText = currentPath.getAttribute('title');
    });
})

document.querySelector("[name = 'Yangon']").classList.add("active");
currentPlace.innerText = 'Yangon'