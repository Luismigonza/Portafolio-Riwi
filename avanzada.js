// 1. Efecto Máquina de Escribir (Typewriter)
const textToType = "Backend Developer | ASP.NET Core";
const typeWriterElement = document.getElementById("typewriter");
let i = 0;

function typeWriter() {
    if (i < textToType.length) {
        typeWriterElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Velocidad de escritura
    }
}

// Iniciar escritura al cargar la página
window.onload = () => {
    setTimeout(typeWriter, 500);
};

// 2. Efecto de aparición al hacer Scroll (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Para que la animación solo ocurra una vez
        }
    });
}, observerOptions);

// Seleccionar todos los elementos con la clase 'hidden' y observarlos
document.querySelectorAll('.hidden').forEach((element) => {
    observer.observe(element);
});