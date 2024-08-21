var botonGenerar = document.getElementById('generarTabla');
var campoNumeroMultiplicar = document.getElementById('numeroMultiplicar');
var contenedorResultado = document.getElementById('resultado');

botonGenerar.addEventListener('click', function() {
    var numero = parseInt(campoNumeroMultiplicar.value);
    var resultado = '';

    for (var i = 1; i <= 10; i++) {
        resultado += numero + ' x ' + i + ' = ' + (numero * i) + '<br>';
    }

    contenedorResultado.innerHTML = resultado;
});
