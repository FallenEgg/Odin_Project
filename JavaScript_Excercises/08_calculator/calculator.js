const add = function(a, b) {
	return a + b;

};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0; 
  
  for (let i = 0; i < array.length; i++) {
      sum += array[i];
   } 
  
   return sum;
};

const multiply = function(array) {
  let product = array[0]; 
  
  for (let i = 1; i < array.length; i++) {
      product *= array[i];
   } 
  
   return product;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
  if (num < 0) 
    return -1;
  
    else if (num === 0) 
    return 1;

    else {
      return (num * factorial(num - 1));
}
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
