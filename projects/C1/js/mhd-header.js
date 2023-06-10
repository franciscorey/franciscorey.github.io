class Header extends HTMLElement {
    constructor() {
        super();
        this.ruta;
    }

    connectedCallback() {
    this.innerHTML = `
        <header class="c-header o-pos-fixed-top"> 
        
            <a href="/" class="c-header__title"><h1>Memoria Histórica Digital</h1></a>

            <button
            mhd-tooltip-right="alto contraste"
            aria-label="botón de alto-contraste"
            id="dark-mode-toggle"
            class="c-button--tema-ac js-ac">
                <i class="fas fa-adjust"></i>
            </button>

        </header>
        `;
    }
}

customElements.define('mhd-header', Header);
