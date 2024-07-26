const removeFromArray = function (array, ...removes) {

    // loop through each argument
    for (remove of removes) {

        for (i = 0; i < array.length; i++) {

            let index = array.indexOf(remove);
            array.splice(index, 1);

        }

    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
