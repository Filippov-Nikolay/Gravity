$(function() {
    $('.services-slider').slick({
        variableWidth: true,
        nextArrow: '<svg class="slick-arrow slick-next" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 16.75L9 8.9375L1.5 1.125" stroke="white" stroke-width="2"/></svg>',
        prevArrow: '<svg class="slick-arrow slick-prev" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 1.5L2 9.3125L9.5 17.125" stroke="white" stroke-width="2"/></svg>'
    });
});
$(function() {
    $('.testimonials-slider').slick({
        nextArrow: '<svg class="slick-arrow slick-next" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 16.75L9 8.9375L1.5 1.125" stroke="white" stroke-width="2"/></svg>',
        prevArrow: '<svg class="slick-arrow slick-prev" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 1.5L2 9.3125L9.5 17.125" stroke="white" stroke-width="2"/></svg>'
    });
});

let workMenuLink = document.querySelectorAll('.work__menu-link'),
    workAboutItems = document.querySelectorAll('.work__about-items');

workMenuLink.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        workMenuLink.forEach(link => {
            link.classList.remove('work__menu-link--active');
        });
        link.classList.add('work__menu-link--active');

        let hrefValue = link.getAttribute('href');
        let workAboutId = document.querySelector(hrefValue);
        workAboutItems.forEach(item => {
            item.classList.remove('work__about-items--active');
        })
        workAboutId.classList.add('work__about-items--active');
    });
});
document.querySelector('.work__menu-link').click();
document.querySelector('.work__about-items').click();

let burgerMenu = document.querySelector('.burger-menu'),
    headerMenu = document.querySelector('.header__wrapper-menu'),
    headerMenuLink = document.querySelectorAll('.header__menu-link');
burgerMenu.addEventListener('click', function(e) {
    if(burgerMenu.classList.toggle('burger-menu--active')) {
        headerMenu.classList.add('header__wrapper-menu--active');
    } else {
        headerMenu.classList.remove('header__wrapper-menu--active');
    }
});
headerMenuLink.forEach(link => {
    link.addEventListener('click', function(e) {
        headerMenuLink.forEach(link => {
            link.classList.remove('header__menu-link--active');
        });
        link.classList.add('header__menu-link--active');
        headerMenu.classList.remove('header__wrapper-menu--active');
        burgerMenu.classList.remove('burger-menu--active');
    });
});
document.querySelector('.header__menu-link').click();