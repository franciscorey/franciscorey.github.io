/* ====================================================================================================== */
/* JAVASCRIPT - MHD WEB COMPONENTS */
/* ====================================================================================================== */

class mhdHola extends HTMLElement {

    //LLama al constructor y al super
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = '<h1>Hola Mundo!</h1>'
    }
}

//Registra el custom-element y la clase desarrollada
window.customElements.define('mhd-hola', mhdHola)