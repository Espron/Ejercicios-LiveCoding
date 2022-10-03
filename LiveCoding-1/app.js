//Declaraciones

let myString = document.getElementById("userString");
let btnShow = document.getElementById("btnPalabra");

//Arreglo de entrada

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

//Compara con la cadena de entrada, 

function bigWords(string, array) {
    let bigWordsArray = [];
    array.forEach(element => {
        if (string.length < element.length) {
            bigWordsArray.push(element);
        }
    });
    return bigWordsArray;
 };

let lista = document.getElementsByTagName("ul");

// Programando la aparición de valores en listado.

function printList(array) {
    array.forEach(element => {
        lista[0].innerHTML +=`<li>${element}</li>`;
    });
};

//AddEventListener para añadir el botón. 
btnShow.addEventListener("click", function (event) {
    let result = bigWords(myString.value, myArray);
    printList(result);
});