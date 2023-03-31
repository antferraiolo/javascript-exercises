const reverseString = function(string) {
    var str = new String(string);
    var strLength = str.length();
    if (strLength < 0 ) return "ERROR";
    let stringOuput = "";
    for (let i = 0; i < strLength ; i++){
        stringOuput = string.pop();
    }
    return stringOutput;
};

// Do not edit below this line
module.exports = reverseString;
