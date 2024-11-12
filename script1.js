const text = "About Me";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("about-me-intro").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;

const fadeInSections = document.querySelectorAll(".fade-in-section");

