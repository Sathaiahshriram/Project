var menucontent = document.querySelector(".menu");
var sidebarcontent = document.querySelector(".side-content")
var container = document.querySelector(".container")

menucontent.onclick = function(){
    sidebarcontent.classList.toggle("sidecontent");
    container.classList.toggle("large-container");
}