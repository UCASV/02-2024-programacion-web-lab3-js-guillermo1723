const createCounter = () => {
    let contador = 0;
    const newContador = () => {
        contador++;
        return contador;
    };
    return newContador;
}

const showCounter = (counterFunction, number) => {
    for (let i = 0; i < number; i++) {
        alert("Valor: " + counterFunction());
    }
}

const requestNumber=()=>{
    let number = parseInt(prompt("Ingrese un número no negativo hasta el cual deseas contar"));
    if (isNaN(number) || number < 0) {
        alert("El número que ha ingresado no es valido");
        return null;
    } else {
        alert("El número que ha ingresado es valido");
        return number;
    }
}

const main = () => {
    let number = requestNumber ();
    if (number !== null) {
        const counterFunction = createCounter(); 
        showCounter(counterFunction, number);
    }
}

main();
