const ftoc = function(temp) {
var newT = (temp - 32) * (5/9);
return Math.round(newT * 10) / 10;
};

const ctof = function(temp) {
  var newTC = (temp * (9/5)) + 32;
  return Math.round(newTC * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
};
