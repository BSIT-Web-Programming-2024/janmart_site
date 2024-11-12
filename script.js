const text = "Jan's Portfolio";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("intro-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;

const fadeInSections = document.querySelectorAll(".fade-in-section");

function checkVisibility() {
    fadeInSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkVisibility);
checkVisibility(); 