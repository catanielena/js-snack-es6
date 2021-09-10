// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
// *
// * For each
// *
function splitArrForEach(arr, a, b) {
    const result = [];
    arr.forEach((elm, i) => {
        if (i>=a && i<=b && !(isNaN(a) || isNaN(b) || a> b || b>arr.length)) {
            result.push(elm);
        }    
    });
    return result;
};
// *
// * Filter
// *
const splitArrFilter = (arr, a, b) => arr.filter((elm, i) => i>=a && i<=b && !(isNaN(a) || isNaN(b) || a> b || b>arr.length));
// *
// *
let arr = ["a", "b", "c", "d", "e", "f", "g"];
console.log(splitArrFilter(arr, 2, 5));
