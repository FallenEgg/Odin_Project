const removeFromArray = function(...values) {
    //first value in spread operator is the array we argument
    const array = values[0];
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!values.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };

module.exports = removeFromArray;