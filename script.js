const text = "Hello Devs!, welcome to my portfolio.";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust speed here
    }
}

document.addEventListener("DOMContentLoaded", typeWriter);
