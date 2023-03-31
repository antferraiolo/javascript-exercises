const removeFromArray = function(array, ...args) {
    //Create new empty array
    const newArray = [];
    //Use forEach to go through the array
    array.forEach((item) =>{
        //push every element into the new array
        // unless, it is in the function arguemnts
        if (!args.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
