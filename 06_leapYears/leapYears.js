const leapYears = function(year) {
    if (!Number.isInteger(year)) return "ERROR"
    let modulosFour = year % 4;
    let modulos100 = year % 100;
    let modulos400 = year % 400;

    if (modulosFour == 0){
        if(modulos100 == 0){
            if(modulos400 == 0 ){
                return true;
            }
            return false; 
        }
        return true; 
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
