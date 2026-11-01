// Obtener los elementos del HTML
const botonDesplegable = document.getElementById("botonDesplegable");
const listaOpciones = document.getElementById("listaOpciones");
const textoSeleccionado = document.getElementById("textoSeleccionado");
const flecha = document.getElementById("flecha");

// Abrir y cerrar el menú
botonDesplegable.addEventListener("click", () => {

    listaOpciones.classList.toggle("abierta");

    if (listaOpciones.classList.contains("abierta")) {
        flecha.textContent = "⌃";
    } else {
        flecha.textContent = "⌄";
    }

});

// Seleccionar una opción
const opciones = document.querySelectorAll(".lista-opciones li");

opciones.forEach((opcion) => {

    opcion.addEventListener("click", () => {

        // Mostrar la opción elegida
        textoSeleccionado.textContent = opcion.dataset.valor;

        // Quitar selección anterior
        opciones.forEach((elemento) => {
            elemento.classList.remove("seleccionada");
        });

        // Marcar la nueva selección
        opcion.classList.add("seleccionada");

        // Cerrar el menú
        listaOpciones.classList.remove("abierta");

        // Cambiar la flecha
        flecha.textContent = "⌄";

    });

});