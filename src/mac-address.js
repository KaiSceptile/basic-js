const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(str){
let array=str.split('-');
let alph="0123456789ABCDEF";
if (array.length!=6) return false;
for (let i=0;i<array.length;i++){
    if (array[i].length!=2) return false;
    if (alph.indexOf(array[i][0])==-1||alph.indexOf(array[i][1])==-1) return false;
}
return true;
}
module.exports = {
  isMAC48Address
};
