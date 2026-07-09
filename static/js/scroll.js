const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});
document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".parallax-content");
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (hero) {
        hero.style.setProperty("--scroll", scrollY);
        heroContent.style.transform =
            `translateY(${scrollY * 0.18 - 40}px)`;
        hero.style.setProperty(
            "--hero-scale",
            1.08 - scrollY * 0.00008
        );
    }
});