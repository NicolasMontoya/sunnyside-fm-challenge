
const hamburgerIcon = document.getElementsByClassName('site__menu-mobile-icon');
const menu = document.getElementsByClassName('site__menu-options');
hamburgerIcon[0].addEventListener('click', function() {
    menu[0].classList.toggle('overlay');
    let expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
});