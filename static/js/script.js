const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero-bg");
const parallaxContent = document.querySelector(".parallax-content");

if (hero && heroBg && parallaxContent && window.gsap) {
    hero.addEventListener("mousemove", (event) => {
        const rect = hero.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        gsap.to(heroBg, {
            x: x * 24,
            y: y * 16,
            duration: 1.2,
            ease: "power3.out"
        });

        gsap.to(parallaxContent, {
            x: x * -8,
            y: 34 + y * -7,
            duration: 1.2,
            ease: "power3.out"
        });
    });
}

if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".navbar", {
        y: -24,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".hero-content h1", {
        y: 54,
        opacity: 0,
        duration: 1.25,
        delay: .1,
        ease: "power3.out"
    });

    gsap.from(".hero-content p", {
        y: 28,
        opacity: 0,
        duration: 1,
        delay: .42,
        ease: "power3.out"
    });

    gsap.to(".hero-bg", {
        scale: 1.15,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.utils.toArray(".reveal").forEach((section) => {
        gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 78%"
            }
        });
    });
}
