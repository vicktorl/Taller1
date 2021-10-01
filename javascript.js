function store() {
    var inputElement = document.getElementById("txtMensaje");

persistInput(inputElement);
    var inputAutor = document.getElementById("txtAutor"),
        inputMensaje = document.getElementById("txtAutor");

    localStorage.setItem("txtAutor", inputAutor.value);
    localStorage.setItem("inputMensaje", inputMensaje.value);
    mostrar();

}
function mostrar(){
    if (localStorage.getItem('txtAutor')) {
        alert(localStorage.getItem('txtAutor'));
    }

}
function persistInput(input)
{
  var key = "input-" + input.id;

  var storedValue = localStorage.getItem(key);

  if (storedValue)
      input.value = storedValue;

  input.addEventListener('input', function ()
  {
      localStorage.setItem(key, input.value);
  });
}
