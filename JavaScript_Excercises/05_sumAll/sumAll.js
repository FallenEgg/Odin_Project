const sumAll = function(a, b) {

    //if arguments do not consist of number return ERROR
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    //if any argument is negative return ERROR
    if (a < 0 || b < 0) return "ERROR";

    //create a final sum variable
    var final = 0;
    
//compare both arguments, deciding the condition based on which is greater.
//iterate through greater number, starting at lower one.
//addon each iteration to final sum variable.    
if (a < b) {
    for (a; a <= b; a++) {
        final += a;
    }

} else {
    for(b; b <= a; b++) {
        final += b;
    }
}
    return final;
};

module.exports = sumAll;
