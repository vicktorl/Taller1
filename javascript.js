function store() {
    var inputAutor = document.getElementById("txtAutor"),
        inputMensaje = document.getElementById("txtMensaje");

    const datos = [];
    
    datos.push(inputAutor.value);
    datos.push(inputMensaje.value);

    if (localStorage.getItem('usuario') != null) {
        localStorage.setItem("usuario", JSON.stringify(datos));
        reset();
    }

    // localStorage.setItem("inputMensaje", inputMensaje.value);
    mostrar();

}
function mostrar() {
    var formulario = document.getElementsByClassName('tbUsuario');

    datos = JSON.parse(localStorage.getItem("usuario"));
    return datos;
}