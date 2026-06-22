// Typing Animation

const text = [
    "Future Data Analyst",
    "IT Undergraduate",
    "Python Enthusiast",
    "Problem Solver"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    if (!isDeleting) {
        currentText = text[index].substring(0, charIndex++);
    } else {
        currentText = text[index].substring(0, charIndex--);
    }

    typing.textContent = currentText;

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === text[index].length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % text.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });

});


// Scroll Reveal

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(
".glass-card,.skill-card,.project-card"
).forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});