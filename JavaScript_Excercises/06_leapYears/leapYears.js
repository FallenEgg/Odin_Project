const leapYears = function(year) {
//using modulus operator, create conditions for leap year
return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) 

};

module.exports = leapYears;
