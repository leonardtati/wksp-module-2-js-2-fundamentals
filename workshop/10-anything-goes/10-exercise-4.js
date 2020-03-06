// Q4
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and .lastIndexOf()

function filterNonUnique(array) {
    let nonUnique = array

    for (i = 0; i<nonUnique.length; i++)
    if (nonUnique.indexOf([i]) !== nonUnique[i]){
        return nonUnique ++;

    }
    

    }



console.log(filterNonUnique([1,2,3,3,4,5,6,7,7,8]));
