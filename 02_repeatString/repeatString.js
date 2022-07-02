const repeatString = function(string, num) {
   if (num<0) return 'ERROR';

    // using repeat() method.
    let result = string.repeat(num);
    return result;
};

// Do not edit below this line
module.exports = repeatString;
