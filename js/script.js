// script.js

document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        // Validar el nombre
        var nombreInput = document.getElementById('nombre');
        var nombreRegex = /^[a-zA-Z\s]+$/;

        if (!nombreRegex.test(nombreInput.value)) {
            alert('Por favor, ingrese un nombre válido sin números ni caracteres especiales.');
            event.preventDefault();
            return;
        }

        // Validar el correo electrónico
        var emailInput = document.getElementById('email');
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput.value)) {
            alert('Por favor, ingrese una dirección de correo electrónico válida.');
            event.preventDefault();
            return;
        }
    });
});
