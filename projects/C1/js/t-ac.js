/* ====================================================================================================== */
/* JAVASCRIPT - MHD Tema Alto Contraste */
/* ====================================================================================================== */

// Declarar que darkMode traera el valor desde el localStorage...
let darkMode = localStorage.getItem('altoContraste');
// Declarar la constante darkModeToggle que recupera el elemento HTML...
const darkModeToggle = document.querySelector(".js-ac");

// PASOS:

const enableDarkMode = () => {
    // 1. Añadir la clase darkmode al body...
    document.body.classList.add("t-ac");
    // 2. Actualizar dark-mode en el LocalStorage
    localStorage.setItem("altoContraste", "activado");
};

const disableDarkMode = () => {
    // 1. Quitar la clase darkmode al body...
    document.body.classList.remove("t-ac");
    // 2. Actualizar dark-mode en el LocalStorage
    localStorage.setItem("altoContraste", "desactivado");
};

if(darkMode === "activado") {
    enableDarkMode();
};

darkModeToggle.addEventListener("click", () => {

    darkMode = localStorage.getItem("altoContraste");

    if (darkMode !== "activado") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});