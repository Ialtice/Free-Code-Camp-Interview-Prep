//compare contents of 2 arrays putting matching numbers in return array symmetricDiff
function sym() {

    //determine number of arrays
    var numOfArrays = arguments.length;

    var symmetricDiff = []; //holds the final array

    function uniqueNumArray(array) { //takes in an array and removes all repeated numbers
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            var currentNumber = array[i];
            if (newArray.indexOf(currentNumber) == -1) {
                newArray.push(currentNumber);
            }
        }
        return newArray;
    }
    //iterates through two arrays at a time to find symmetric difference
    for (var i = 0; i < numOfArrays; i++) {
        var nextArray = uniqueNumArray(arguments[i]);
        var notUnique = [];
        for (var j = 0; j < nextArray.length; j++) {
            var numberIndex = symmetricDiff.indexOf(nextArray[j])
            
            if (numberIndex == -1 && notUnique.indexOf(nextArray[j]) == -1) {
                symmetricDiff.push(nextArray[j]);
            } else {
                symmetricDiff.splice(symmetricDiff.indexOf(nextArray[j]), 1);
                notUnique.push(nextArray[j]);
                
            }
        }
    }
    //sorts final array into ascending order
    return symmetricDiff.sort();
}

console.log(sym([1, 2, 3], [5, 2, 1, 4])); 
//should return [3, 4, 5].

//should contain only three elements.

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
//shouldreturn [3, 4, 5].

//should contain only three elements.

console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]));
//shouldreturn [3, 4, 5].

//should contain only three elements.

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
//shouldreturn [1, 4, 5]

//should contain only three elements.

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
//shouldreturn [1, 4, 5].

//should contain only three elements.

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
//shouldreturn [2, 3, 4, 6, 7].

//should contain only five elements.

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
//shouldreturn [1, 2, 4, 5, 6, 7, 8, 9].

//should contain only eight elements.