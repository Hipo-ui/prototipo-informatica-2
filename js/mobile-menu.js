const boton = document.querySelector('#menu-botton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    menu.classList.toggle("hidden")
})