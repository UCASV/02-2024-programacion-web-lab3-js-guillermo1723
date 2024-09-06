const searchNumber = (array, search) => {
    let index = array.indexOf(search);
    if (index !== -1) {
        console.log(search + " está en el índice " + index);
    } else {
        console.log(search + " no está en el array.");
    }
}

const requestNumber = () => {
    let input = prompt("Ingrese un número el cual deseas buscar en el Array");
    let number = parseInt(input, 10);
    if (isNaN(number) || number < 0) {
        alert("El número que ha ingresado no es válido");
        return null;
    } else {
        alert("El número que ha ingresado es válido");
        return number;
    }
}

const main = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let search = requestNumber();  

    if (search !== null) {
        searchNumber(numbers, search);  
    } else {
        console.log("Número no válido ingresado. No se realiza la búsqueda.");
    }
}

main();
