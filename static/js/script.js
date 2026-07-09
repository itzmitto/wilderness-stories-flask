const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const fullscreenMenu = document.getElementById("fullscreenMenu");

menuButton.addEventListener("click", () => {

    fullscreenMenu.classList.add("active");

});

closeButton.addEventListener("click", () => {

    fullscreenMenu.classList.remove("active");

});