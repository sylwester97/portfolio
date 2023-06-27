const nav = document.querySelector('.navbar')
const button = document.querySelector('.navbar__button')
const bMenu = document.querySelector('.burgerMenu')
const bitem = document.querySelectorAll('li')
const bItem1 = document.querySelector('.span1')
const bItem2 = document.querySelector('.span2')
const bItem3 = document.querySelector('.span3')
const menuItems = document.querySelectorAll('.menuItem a ')

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.onscroll = function () {
    if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {
        nav.style.backgroundColor = "#fff";
        menuItems.forEach((menuItem) => {
            menuItem.style.color = 'black';
        });

    }
    else {
        menuItems.forEach((menuItem) => {
            menuItem.style.color = 'white';
        });
        nav.style.backgroundColor = "transparent";

    }
};

bitem.forEach(element => {
    element.addEventListener('click', function () {
        bMenu.classList.toggle('active')
        button.classList.toggle('open')

    })

});

button.addEventListener('click', function () {
    button.classList.toggle('open')

    bMenu.classList.toggle('active')

});

// function invertColor(backgroundColor) {
//     const color = (backgroundColor.charAt(0) === '#') ? backgroundColor.substring(1, 7) : backgroundColor;
//     const r = parseInt(color.substring(0, 2), 16);
//     const g = parseInt(color.substring(2, 4), 16);
//     const b = parseInt(color.substring(4, 6), 16);

//     const brightness = (r * 299 + g * 587 + b * 114) / 1000;
//     return (brightness > 125) ? 'black' : 'white';
// }

// menuItem.style.color = invertColor(element.style.backgroundColor);

// menuItem.forEach(element => {

//     element.style.color = invertColor(element.style.backgroundColor);
// });