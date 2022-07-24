const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };
  
const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
  
// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
  Obs.observe(EL, obsOptions);
});

//attach css
document.getElementById("on1").addEventListener("click", function(){
  document.getElementById("main").classList.add("main1")
  document.getElementById("side").classList.add("side1")
})
document.getElementById("off1").addEventListener("click", function(){
  document.getElementById("main").classList.remove("main1")
  document.getElementById("side").classList.remove("side1")
})

document.getElementById("on2").addEventListener("click", function(){
  document.getElementById("main").classList.add("main2")
  document.getElementById("side").classList.add("side2")
})
document.getElementById("off2").addEventListener("click", function(){
  document.getElementById("main").classList.remove("main2")
  document.getElementById("side").classList.remove("side2")
})

document.getElementById("on3").addEventListener("click", function(){
  document.getElementById("main").classList.add("main3")
  document.getElementById("side").classList.add("side3")
})
document.getElementById("off3").addEventListener("click", function(){
  document.getElementById("main").classList.remove("main3")
  document.getElementById("side").classList.remove("side3")
})
