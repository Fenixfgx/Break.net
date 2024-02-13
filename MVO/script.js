// JavaScript para menú responsivo

const nav = document.querySelector('nav');
const menu = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');

// Agregar event listener para click en menú responsivo
nav.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Cerrar menú al seleccionar un item
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
  })
})

// Obtener enlaces del nav
const navLinks = document.querySelectorAll('nav a');

// Recorrer los enlaces 
navLinks.forEach(link => {

  // Agregar event listener al clic
  link.addEventListener('click', () => {
  
    // Obtener sección destino del href
    const section = document.querySelector(link.getAttribute('href'));
    
    // Agregar padding igual a altura del nav
    section.style.paddingTop = '40px';

  });

});