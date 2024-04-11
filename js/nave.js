document.addEventListener('DOMContentLoaded', function() {
    const nave = document.getElementById('nave');

    document.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const deltaX = x - centerX;
        const deltaY = y - centerY;
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        nave.style.transform = `translate(-50%, -50%) rotate(${angle}rad) translate(${distance}px)`;
    });
});