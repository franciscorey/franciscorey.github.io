class Corners extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
    this.innerHTML = `
    <div class="o-space-inset-m">
        <svg class="o-icon-orn-tl"><use xlink:href="../../assets/svg/sprite.svg#mhd-orn-tl"/></svg >
        <svg class="o-icon-orn-tr"><use xlink:href="../../assets/svg/sprite.svg#mhd-orn-tr"/></svg >
        <svg class="o-icon-orn-bl"><use xlink:href="../../assets/svg/sprite.svg#mhd-orn-bl"/></svg >
        <svg class="o-icon-orn-br"><use xlink:href="../../assets/svg/sprite.svg#mhd-orn-br"/></svg >     
    </div>
    <div class="o-space-inset-m">
        <svg class="o-icon-orn-tl"><use xlink:href="../assets/svg/sprite.svg#mhd-orn-tl"/></svg >
        <svg class="o-icon-orn-tr"><use xlink:href="../assets/svg/sprite.svg#mhd-orn-tr"/></svg >
        <svg class="o-icon-orn-bl"><use xlink:href="../assets/svg/sprite.svg#mhd-orn-bl"/></svg >
        <svg class="o-icon-orn-br"><use xlink:href="../assets/svg/sprite.svg#mhd-orn-br"/></svg >     
    </div>
    <div class="o-space-inset-m">
        <svg class="o-icon-orn-tl"><use xlink:href="./assets/svg/sprite.svg#mhd-orn-tl"/></svg >
        <svg class="o-icon-orn-tr"><use xlink:href="./assets/svg/sprite.svg#mhd-orn-tr"/></svg >
        <svg class="o-icon-orn-bl"><use xlink:href="./assets/svg/sprite.svg#mhd-orn-bl"/></svg >
        <svg class="o-icon-orn-br"><use xlink:href="./assets/svg/sprite.svg#mhd-orn-br"/></svg >     
    </div>
    <div class="o-space-inset-m">
        <svg class="o-icon-orn-tl"><use xlink:href="/assets/svg/sprite.svg#mhd-orn-tl"/></svg >
        <svg class="o-icon-orn-tr"><use xlink:href="/assets/svg/sprite.svg#mhd-orn-tr"/></svg >
        <svg class="o-icon-orn-bl"><use xlink:href="/assets/svg/sprite.svg#mhd-orn-bl"/></svg >
        <svg class="o-icon-orn-br"><use xlink:href="/assets/svg/sprite.svg#mhd-orn-br"/></svg >     
    </div>
    `;
    }
}

customElements.define('mhd-corners', Corners);
