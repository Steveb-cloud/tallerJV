window.onload = function() {
    const lista = document.querySelectorAll("#miLista li");
    lista.forEach((item, index) => {
        item.textContent = `Elemento B ${index + 1}`;
    });
};