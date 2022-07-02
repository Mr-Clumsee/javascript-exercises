const sumAll = function(start, end) {
  
    // throws error if any of the arguments are non-integer.
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    
    // throws error if any of the arguments are negative.
    if (start<0 || end <0) return "ERROR";

    // if start > end, swap them.
    if (start>end)
    {
        let temp = start;
        start = end;
        end = temp;
    }
     
    let sum = 0;
    for (let i = start; i<= end; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
