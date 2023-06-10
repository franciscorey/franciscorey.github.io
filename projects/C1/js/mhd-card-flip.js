    // JS ACTIVAR CARD FLIP

    let cardGroup = document.querySelectorAll(".c-card-flip");


cardGroup.forEach(item => {
    let cardImg = item.querySelector(".js-img");
    let cardTitle = item.querySelector(".c-card-flip__caption");
    let cardBack = item.querySelector(".c-card-flip__back");
    let cardBG = item.querySelector(".c-card-flip__bg");

    let html = document.body.parentNode;

    function toggleClassCard() {
        //toggle logic
    }

    item.addEventListener('focus', toggleClassCard);

    html.addEventListener('click', function(event) {
        
        if (item.contains(event.target)) {
            item.classList.add("is-active");
            cardBack.classList.add("is-active");
            cardBG.classList.add("is-active");
            cardImg.classList.add("is-changed");
            cardTitle.classList.add("is-hidden");
        } else {
            item.classList.remove("is-active");
            cardBack.classList.remove("is-active");
            cardBG.classList.remove("is-active");
            cardImg.classList.remove("is-changed");
            cardTitle.classList.remove("is-hidden");
        }
    });

})




    /*
    cardActivator.addEventListener('blur', () => {
        item.classList.remove("is-active");
        cardBack.classList.remove("is-active");
        cardBG.classList.remove("is-active");
        cardImg.classList.remove("is-changed");
        cardTitle.classList.remove("is-hidden");
    })
    */
