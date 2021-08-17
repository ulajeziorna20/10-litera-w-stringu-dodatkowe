// Zaimplementuj funkcję, która przyjmuje 2 argumenty. Pierwszy parametr to string, a drugi to litera.

// Funkcja liczy i zwraca ilość wystąpień litery w stringu.

// Funkcję wywołaj z parametrami:
// 1. Szkoła Programowania Akademia 108
// 2. a

// Wynik działania funkcji wyświetl w konsoli.



// const countingLetters = (string, letter) => {


//     let count = (string.match(/letter/g) || []).length;
//     console.log(count);

// }


const countingLetters = (string, letter) => {


    let rgxp = new RegExp(letter, "g");

    let stringToLowerCase = string.toLowerCase();
    let count = stringToLowerCase.match(rgxp).length;

    return count;
}

console.log(countingLetters(`Szkoła Programowania Akademia 108`, `a`));
console.log(countingLetters(`Szkoła Programowania Akademia 108`, `o`));
console.log(countingLetters(`Szkoła Programowania Akademia 108`, `r`));




// var temp = "This is a string.";
// var count = (temp.match(/is/g) || []).length;
// console.log(count);





// const countingLetters = (str, letter) => {

//      let array = str.split("");
//     // console.log(array);

//     let countOfLetters = 0;

//     for (let i = 0; i < array.length; i++) {
        
//         // console.log(array[i]);

//         if (array[i] === letter) {
//             countOfLetters += 1;
//         }
        
//     }

//     return countOfLetters;

// }


// console.log(countingLetters(`Szkoła Programowania Akademia 108`, `a`));
// console.log(countingLetters(`Szkoła Programowania Akademia 108`, `o`));
// console.log(countingLetters(`Szkoła Programowania Akademia 108`, `r`));



