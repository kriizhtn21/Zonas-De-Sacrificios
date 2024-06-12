// Obtener elementos del DOM
var popup = document.getElementById("popup");
var openPopupBtn = document.getElementById("openPopup");
var closePopupBtn = document.getElementById("closePopup");

// Mostrar pop-up cuando se hace clic en el botón
openPopupBtn.addEventListener("click", function() {
  popup.style.display = "block";
});

// Ocultar pop-up cuando se hace clic en el botón de cerrar
closePopupBtn.addEventListener("click", function() {
  popup.style.display = "none";
});

// Ocultar pop-up cuando se hace clic fuera de él
window.addEventListener("click", function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});


