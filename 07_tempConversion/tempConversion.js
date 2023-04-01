const convertToCelsius = function(number) {
 // if (!Number.isInteger(number)) return "ERROR";
  let convertednumber = 0; 
  var multiplier = Math.pow(10, 1 || 0);
  convertednumber = ((number - 32)* (5/9));
  convertednumber = Math.round(convertednumber * multiplier)/multiplier;
  return convertednumber;

};

const convertToFahrenheit = function(number) {
//x °C ≘ (x × 9/5+ 32) °F
// if (!Number.isInteger(number)) return "ERROR";
let convertednumber = 0; 
var multiplier = Math.pow(10, 1 || 0);
convertednumber = (number * (9/5) + 32);
convertednumber = Math.round(convertednumber * multiplier)/multiplier;
return convertednumber;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
