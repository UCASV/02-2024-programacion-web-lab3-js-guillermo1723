const calculateFactorial = (/*recibe*/) => {
    //Code
}

const requestNumber = () => {
    let number;
    alert ("Ingrese un numero para calcular el factorial, no negativo")
    prompt ("Ingrese el valor");
    if (number < 0) {
        alert ("El numero que ha ingresado es no valido")
    }else {
        console.log ("El valor ingresado es valido")
    }
}

const main = () => {
    requestNumber ();
}

main();
