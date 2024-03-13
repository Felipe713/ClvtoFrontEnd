// script.js

document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', function (event) {
        var nombreInput = document.getElementById('inputName4');
        var emailInput = document.getElementById('inputEmail4');
        var telefonoInput = document.getElementById('inputNumber4');
        var mensajeInput = document.getElementById('inputMessage');

        if (!validateNombre(nombreInput.value)) {
            alert('Por favor, ingrese un nombre válido sin números ni caracteres especiales.');
            event.preventDefault();
            return;
        }

        if (!validateEmail(emailInput.value)) {
            alert('Por favor, ingrese una dirección de correo electrónico válida.');
            event.preventDefault();
            return;
        }

        if (!validateTelefono(telefonoInput.value)) {
            alert('Por favor, ingrese un número de teléfono válido.');
            event.preventDefault();
            return;
        }

        if (mensajeInput.value.trim() === '') {
            alert('Por favor, ingrese un mensaje.');
            event.preventDefault();
            return;
        }
    });

    function validateNombre(nombre) {
        return /^[a-zA-Z\s]+$/.test(nombre);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateTelefono(telefono) {
        return /^\d{9}$/.test(telefono);
    }
});
