var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){
     for(var i = 0; i < activeElements.length; i++){
          activeElements[i].classList.toggle("active");
     }
})