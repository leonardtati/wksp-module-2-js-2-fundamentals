// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
function calculateAverage(grades) {

    let sumOf= 0;
    grades.forEach(function(number) {
        return sumOf = sumOf + number;
    });
    return Math.round(sumOf / 5);
}

function giveMeAnA(grade){

}

 
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


