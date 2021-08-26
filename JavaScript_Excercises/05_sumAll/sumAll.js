const sumAll = function(a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";

    var final = 0;
    
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
