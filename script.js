window.addEventListener('scroll', function () {
    var projectCards = document.querySelectorAll('.project-card');

    for (var i = 0; i < projectCards.length; i++) {
        var cardPosition = projectCards[i].getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (cardPosition < windowHeight * 0.9) {
            projectCards[i].classList.add('active');
        } else {
            projectCards[i].classList.remove('active');
        }
    }
});
avatar = document.querySelector('.avatar');
setTimeout(function () {
    avatar.classList.add('active');
}, 500);