document.addEventListener("DOMContentLoaded", function () {
  VANTA.FOG({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
  
    highlightColor: 0x0,
    midtoneColor: 0x5704cf,
    lowlightColor: 0x5040f,
    baseColor: 0x50325,
    blurFactor: 1.4,
    speed: 0.5,
    zoom: 1,
  });

  // Agregar evento personalizado
  document.querySelector("#background").addEventListener("click", function() {
    // Ejemplo: Cambiar el color de fondo al hacer clic
    VANTA.FOG.updateColor(0xff0000); // Cambiar a rojo
  });
});