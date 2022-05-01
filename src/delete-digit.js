const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num){
    let str=num.toString();
    let posit=str.length-1;
    for (let i=0;i<str.length-1;i++){
        if (str[i]<str[i+1]) {
            posit=i;
            break;
        }
    }
    str=str.slice(0,posit)+str.slice(posit+1,str.length);
    return str*1;
}

module.exports = {
  deleteDigit
};
