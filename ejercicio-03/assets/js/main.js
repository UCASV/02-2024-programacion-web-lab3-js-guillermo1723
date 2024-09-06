const calculateFactorial = (number) => {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    alert(`El valor del factorial que ha ingresado es ${factorial}`);
}

const requestNumber = () => {
    let number = parseInt(prompt("Ingrese un número para calcular el factorial, no negativo"));
    if (isNaN(number) || number < 0) {
        alert("El número que ha ingresado no es valido");
        return null;
    } else {
        alert("El número que ha ingresado es valido");
        return number;
    }
}

const main = () => {
    let number = requestNumber(); 
    if (number !== null) {  
        calculateFactorial(number);
    }
}

main();
