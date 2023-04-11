

// EJERCICIO 3

let chessboard = "";
let numberOfCol;
let numberOfRows;

numberOfCol = Number(prompt("width: "));
numberOfRows = Number(prompt("height: "));

for (let row = 1; row <= numberOfRows; row++) {
    
    for (let col = 1; col <= numberOfCol; col++) {

        if (row % 2 !== 0 && col % 2 !== 0) {
            chessboard += " ";
        }
        else if (row % 2 !== 0 && col % 2 === 0) {
            chessboard += "#";
        }
        else if (row % 2 === 0 && col % 2 !== 0) {
            chessboard += "#";
        }
        else {
            chessboard += " ";
        }
    }

    if (row !== numberOfRows) {
        chessboard += "\n";
    }

    console.log(chessboard);
}


// EJERCICIO 2
/* 
for (number = 0; number <= 100; number++) {

    if (number % 3 === 0 && number % 5 === 0) {
        console.log("fizz fuzz");
    }
    else if (number % 3 === 0 ) {
        console.log("fizz");
    }
    else if (number % 5 === 0 ) {
        console.log("fuzz");
    }
    else {
        console.log(number);
    }
}

 */

// EJERCICIO 1
/* 
let printable = "";

for (i=1; i<=7; i++) {
    printable += "#";
    console.log(printable);
}
 */
