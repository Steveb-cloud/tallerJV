window.onload = function() {
    const datos = [
        ["Juan", 25],
        ["María", 30]
    ];

    const filas = document.querySelectorAll("#miTabla tbody tr");
    filas.forEach((fila, index) => {
        fila.cells[0].textContent = datos[index][0];
        fila.cells[1].textContent = datos[index][1];
    });
};
