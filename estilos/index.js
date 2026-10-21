/* Mensaje de bienvenida */
if (!sessionStorage.getItem("bienvenidaMostrada")) {
    alert("¡Bienvenido a TOxKO!\nEncuentra tu estilo con nosotros.");
    sessionStorage.setItem("bienvenidaMostrada", "si");
}

/* Botones de los productos */
const botones = document.querySelectorAll(".boton-secundario");

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