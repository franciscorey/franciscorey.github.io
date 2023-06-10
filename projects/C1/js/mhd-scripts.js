/* ====================================================================================================== */
/* JAVASCRIPT - MHD Scripts Generales */
/* ====================================================================================================== */


    // JS CLOSE ALERT DIV

    const alertMessage = document.querySelector(".c-alert");
    const alertCloseBtn = document.querySelector(".js-close");

    alertCloseBtn.addEventListener("click", () => {
        console.log("Click de alerta");
        alertMessage.className = "u-hidden";
    });

    // JS CLICK CARD EXPANDIBLE

    var cardToggles = document.getElementsByClassName("js-card-toggle");
    for (var i = 0; i < cardToggles.length; i++) {
        cardToggles[i].addEventListener("click", function(e){
            e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle(
                "is-hidden"
            );
        });
    }


