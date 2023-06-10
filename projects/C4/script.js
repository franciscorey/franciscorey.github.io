document.addEventListener('DOMContentLoaded', function () {
    var animatedElements = document.querySelectorAll('.animated');

    function animateElements() {
        animatedElements.forEach(function (element) {
            setTimeout(function () {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200);
        });
    }

    animateElements();
});
