const themeButtons = document.querySelectorAll('.theme-button');
const mainContainer = document.querySelector('.main-container');

function applyTheme(theme) {
    mainContainer.className = 'main-container';
    mainContainer.classList.add(`theme-${theme}`);
}

themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const theme = button.id.replace('theme-', '');
        applyTheme(theme);
    });
});
