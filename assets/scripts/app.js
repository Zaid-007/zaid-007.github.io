let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

navbar.onclick = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }