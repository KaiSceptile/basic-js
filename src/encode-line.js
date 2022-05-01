const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str){
    let i=0;
    let result="";
    while (i<str.length){
        let sym=str[i];
        let times=0;
        while (str[i]==sym){
            i++;
            times++;
        }
        if (times>1) result=result+times;
        result=result+sym;
        }
    return result;
}

module.exports = {
  encodeLine
};
