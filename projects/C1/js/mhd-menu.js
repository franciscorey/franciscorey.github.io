    // Click que muestra el Menu
    const toggleBtn = document.querySelector("#js-nav-btn");
    const navMenu = document.querySelector("#js-nav-menu");

    toggleBtn.addEventListener("click", () => {
        if (navMenu.className == "u-hidden") {
            navMenu.className = " ";

        } else {
            navMenu.className = "u-hidden";
        }
    });

    // Click en el body cierra el Menu
    const bodyMain = document.querySelector("#main");
    
    bodyMain.addEventListener("click", () => {
        navMenu.className = "u-hidden";
    });

    // Click que abre y cierra el acordeón del Menu
    const accordeon = document.querySelector(".js-accordeon");

    accordeon.addEventListener('click', (e)=>{
        if(e.target.classList.contains('js-group')){
            e.target.parentElement.classList.toggle('u-scale');
            e.target.children[1].classList.toggle('u-rotate');
        }
    });