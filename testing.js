// Log All Paird of array
const boxes = [1, 2, 3, 4, 5]


function logOfPaireOfArray(array) {
    for (let i of array) {
        for (let j of array) {
            // console.log(`the i => ${i} j=> ${j}`);
            console.log(i, j);
        }
    }
}
// O(n * n)
// O(n^2)

// logOfPaireOfArray(boxes)

function printAllNumbersThenAllPairSums(array){
    console.log('this are numbers')
    array.forEach(element => {
        console.log(element);
    });

    console.log('getting all pair sum');
    for(let number of array){
        for(let index2 in array) {
            console.log(`(${parseInt(index2) + 1}) ${number +array[index2]}`)
        }
    }
}


// printAllNumbersThenAllPairSums([1,2,3,4,5])
printAllNumbersThenAllPairSums(['a','b','c','d','e'])

O(n^2)