const repeatString = function(string, repeats) {

    let returnedString = "";

    if(repeats < 0){
        return "ERROR";
    }

    for (i = 0; i < repeats; i++){
        returnedString += string;
    }

    return returnedString

};

// Do not edit below this line
module.exports = repeatString;
