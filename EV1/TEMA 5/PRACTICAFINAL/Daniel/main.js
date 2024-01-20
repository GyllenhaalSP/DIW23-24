document.addEventListener('DOMContentLoaded', function() {
    const numeroEstrellas = 1000;
    const contenedor = document.querySelector('.fondo');

    for (let i = 0; i < numeroEstrellas; i++) {
        const estrella = document.createElement('div');
        estrella.className = 'estrella';
        estrella.style.width = estrella.style.height = `${Math.random() * 4.5}px`;
        estrella.style.left = `${Math.random() * 100}%`;
        estrella.style.top = `${Math.random() * 100}%`;
        estrella.style.animationDelay = `${Math.random() * 10}s`;

        contenedor.appendChild(estrella);
    }
});