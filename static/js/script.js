const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const fullscreenMenu = document.getElementById("fullscreenMenu");

if (menuButton && closeButton && fullscreenMenu) {

    menuButton.addEventListener("click", () => {
        fullscreenMenu.classList.add("active");
    });

    closeButton.addEventListener("click", () => {
        fullscreenMenu.classList.remove("active");
    });

}

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content h1", {
    y: 80,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out"
});

gsap.from(".hero-content p", {
    y: 50,
    opacity: 0,
    delay: 0.3,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".navbar", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});