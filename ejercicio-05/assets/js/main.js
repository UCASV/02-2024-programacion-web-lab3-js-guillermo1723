const searchNumberInArray = (array, numberToSearch) => {
    let index = array.indexOf(numberToSearch);
    if (index !== -1) {
        console.log(numberToSearch + " está en el índice " + index);
    } else {
        console.log(numberToSearch + " no está en el array.");
    }
}

const requestNumber = () => {
    let number = parseInt(prompt("Ingrese un número el cual deseas buscar en el Array"), 10);
    if (isNaN(number) || number < 0) {
        alert("El número que ha ingresado no es válido");
        return null;
    } else {
        alert("El número que ha ingresado es válido");
        return number;
    }
}

const main = () => {
    let numbers = [1, 2, 3, 4, 5];
    let numberToSearch = requestNumber();  

    if (numberToSearch !== null) {
        searchNumberInArray(numbers, numberToSearch);  
        console.log("Número no válido ingresado. No se realiza la búsqueda.");
    }
}

main();
