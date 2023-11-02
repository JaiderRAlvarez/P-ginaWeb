const nombres = ["Juan", "María", "Pedro", "Luis", "Ana", "Sofía", "Carlos"];

function agregarFila(nombre, edad, telefono, correo) {
    const table = document.getElementById("mi-tabla").getElementsByTagName('tbody')[0];
    const row = table.insertRow(table.rows.length);

    const cellNombre = row.insertCell(0);
    cellNombre.innerHTML = nombre;

    const cellEdad = row.insertCell(1);
    cellEdad.innerHTML = edad;

    const cellTelefono = row.insertCell(2);
    cellTelefono.innerHTML = telefono;

    const cellCorreo = row.insertCell(3);
    cellCorreo.innerHTML = correo;
}

function generarDatosAleatorios() {
    for (let i = 0; i < 5; i++) {
        const nombre = nombres[Math.floor(Math.random() * nombres.length)];
        const edad = Math.floor(Math.random() * 30) + 20;
        const telefono = Math.floor(1000000000 + Math.random() * 9000000000).toString().slice(0, 10);
        const correo = `empleado${i + 1}@gmail.com`;

        agregarFila(nombre, edad, telefono, correo);
    }
}

window.onload = function () {
    const table = document.getElementById("mi-tabla").getElementsByTagName('tbody')[0];
    table.innerHTML = '';

    generarDatosAleatorios();
};
