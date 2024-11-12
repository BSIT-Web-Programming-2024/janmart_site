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

