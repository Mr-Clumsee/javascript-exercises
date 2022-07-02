const repeatString = function(string, num) {
   if (num<0) return 'ERROR';
   
    // using repeat() method.
    // let result = string.repeat(num);
    // return result;
    
    
    // using for loop.
    let result="";
    for (let i = 0; i < num; i ++){
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
