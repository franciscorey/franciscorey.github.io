class Footer extends HTMLElement {
    constructor() {
        super();
        this.ruta;
    }

    static get observedAttributes(){
        return ["ruta"];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        switch(nameAttr){
            case "ruta":
                this.ruta = newValue;
            break;
        }
    }

    connectedCallback() {
    this.innerHTML = `
        <footer id="footer" class="c-footer">
            <!-- Contenedor de Footer en Grilla -->
            <div>    
                <!-- Seccion de texto "Contacto" -->    
                <div class="c-footer__body" tabindex="0">
                    <h2 class="c-footer__title">Contacto:</h2>
                    <p>correo: <em>mhd@pjud.cl</em></p>
                    <p>fono: <em>+56 22 6721778</em></p>
                </div>
                <!-- Seccion de texto "Sobre Nosotros" -->
                <div>
                    <a title="Enlace a Sitio web del Poder Judicial de Chile" href="http://www.pjud.cl" target="new">
                    <img class="c-footer__img" src=${this.ruta}>
                    </a>
                </div>         
            </div>
            <!-- Copyright -->
            <p class="c-footer__copyright" tabindex="0">Sitio Web desarrollado por Memoria Histórica Digital del Poder Judicial, Chile.</p>
        </footer>
    `;
    }
}

customElements.define('mhd-footer', Footer);
