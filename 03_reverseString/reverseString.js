const reverseString = function(string) {
    let letterArray = string.split("");
    letterArray.reverse();
    return letterArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
