let toggleButton= document.getElementById("toggle-button");
    let navLiks= document.querySelector(".nav-links");

    toggleButton.addEventListener("click",function(){
    navLiks.classList.toggle("active");
})