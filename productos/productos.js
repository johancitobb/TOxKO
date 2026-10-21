/* Contador de productos consultados */
let productosSeleccionados = 0;

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        productosSeleccionados++;

        alert(
            "¡Gracias por visitar TOxKO!\n\n" +
            "Has consultado un producto.\n" +
            "Productos consultados: " + productosSeleccionados
        );
    });
});