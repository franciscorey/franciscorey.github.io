    // JS ACTIVAR TOKEN MODAL

    let modalGroup = document.querySelectorAll(".c-token-modal");


modalGroup.forEach(item => {
    let modal = item.querySelector(".c-token-modal__modal");
    let modalToken = item.querySelector(".c-token-modal__token");
    let modalClose = item.querySelector(".c-token-modal__modal-close");
    let modalBG = item.querySelector(".c-token-modal__bg");

    modalToken.addEventListener('click', () => {
        modal.classList.add("is-active");
        modalBG.classList.add("is-active");
    })

    modalClose.addEventListener('click', () => {
        modal.classList.remove("is-active");
        modalBG.classList.remove("is-active");
    })

    modalBG.addEventListener('click', () => {
        modal.classList.remove("is-active");
        modalBG.classList.remove("is-active");
    })
})
