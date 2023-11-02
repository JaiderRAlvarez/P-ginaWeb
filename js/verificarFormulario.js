document.addEventListener('DOMContentLoaded', function () {
    var forma = document.getElementById('forma');
    var nombre = document.getElementById('nombre');
    var direccion = document.getElementById('direccion');
    var telefono = document.getElementById('telefono');
    var email = document.getElementById('email');
    var ciudad = document.getElementById('ciudad');
    var fechaNacimiento = document.getElementById('fechaNacimiento');

    forma.addEventListener('submit', function (event) {
        if (nombre.value.trim() === '' ||
            direccion.value.trim() === '' ||
            email.value.trim() === '' ||
            ciudad.value.trim() === '' ||
            fechaNacimiento.value.trim() === '') {
            alert('Por favor, rellena todos los campos.');
            event.preventDefault();
        } else {
            var telefonoValue = telefono.value.trim();
            if (telefonoValue === '' || isNaN(telefonoValue)) {
                alert('El campo de teléfono debe contener un número telefónico.');
                event.preventDefault();
            }
        }
    });
});