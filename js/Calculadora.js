// Primero creamos un arrya para cada tipo de boton es decir, para los botones
// numericos, luego un array para los botones matematicos donde se guardara el valor de cada BeforeUnloadEvent

const botonNumeros = document.getElementsByName("numbers"); 
const botonOperacion = document.getElementsByName("operator");
const borrar = document.getElementsByName("deleteAll")[0];
const igual = document.getElementsByName("equal")[0];
var resultado = document.getElementById("result");
var operacionActual = " ";
var operacionaAnterior = " ";
var operacion = undefined;


//RECORRER UN ARRAY
botonNumeros.forEach(function (boton) {  
    boton.addEventListener("click", function() {
    valor(boton.innerText);
    })
});

botonOperacion.forEach(function (boton){

    boton.addEventListener("click", function(){
        selectOperacion(boton.innerText);
    })
});

borrar.addEventListener("click", function(){  //evento limpiar
    limpiar();  
    actualizar();

});

igual.addEventListener("click", function(){  //evento igual
    calcular();
    actualizar();
});


//FUNCIONES

function selectOperacion (op) {
    if (operacionActual === " ") return; //Si no se selecciono nada no se realize operacion
    
    if (operacionaAnterior !== " ") { //si se selecciono una operacion se realize la funcion calcular
        calcular();
    }

    operacion = op.toString();
    operacionaAnterior = operacionActual;
    operacionActual = " "

}

function calcular( ) {
    var calculo;

    const anterior = parseFloat(operacionaAnterior);
    const actual = parseFloat(operacionActual);

    if (isNaN(actual) || isNaN(anterior)) return; //si no es un caracter numerico no hacer nada

    switch (operacion) {

        case "+":
            calculo = anterior + actual;
            break;

        case "-":
            calculo = anterior - actual;
            break;

        case "/":
            calculo = anterior / actual;
            break;

        case "*":
            calculo = anterior * actual;
            break;

        case "%":
            calculo = (anterior * actual) / 100;
            break;
        default:
             return;
    }

    operacionActual = calculo;
    operacion = undefined;
    operacionaAnterior = " ";

}

function valor (numero) {
    operacionActual = operacionActual.toString() + numero.toString();
    actualizar();
}

function limpiar (){
    operacionActual = " ";
    operacionaAnterior = " ";
    operacion = undefined;
}

function actualizar () {
    resultado.value = operacionActual;
}
