//burger
(function () {
    const burgerItem = document.querySelector('.intro__burger');
    const menu = document.querySelector('.header__nav');
    const menuItemClose = document.querySelector('.header__close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__active');
    });
    menuItemClose.addEventListener('click', () => {
        menu.classList.remove('header__active');
    });
}());