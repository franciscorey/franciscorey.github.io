    // JS ACTIVAR ITEM

    let itemGroup = document.querySelectorAll(".c-item");


itemGroup.forEach(item => {
    let itemImg = item.querySelector(".js-img");
    let itemTitle = item.querySelector(".c-item__caption");
    let itemFront = item.querySelector(".c-item__front");
    let itemBack = item.querySelector(".c-item__back");
    let itemBG = item.querySelector(".c-item__bg");

    let html = document.body.parentNode;

    function toggleClassItem() {
        //toggle logic
    }

    item.addEventListener('focus', toggleClassItem);

    html.addEventListener('click', function(event) {
        
        if (item.contains(event.target)) {
            item.classList.add("is-active");
            itemFront.classList.add("is-hidden");
            itemBack.classList.add("is-active");
            itemBG.classList.add("is-active");
            itemImg.classList.add("is-changed");
            itemTitle.classList.add("is-hidden");
        } else {
            item.classList.remove("is-active");
            itemFront.classList.remove("is-hidden");
            itemBack.classList.remove("is-active");
            itemBG.classList.remove("is-active");
            itemImg.classList.remove("is-changed");
            itemTitle.classList.remove("is-hidden");
        }
    });

})
