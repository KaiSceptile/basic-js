const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(str1,str2){
  arrstr1=str1.split('');
  arrstr2=str2.split('');
  let result=0;
  let uniqueChars1 = arrstr1.filter((element, index) => {
      return arrstr1.indexOf(element) === index;
  });
  let uniqueChars2 = arrstr2.filter((element, index) => {
      return arrstr2.indexOf(element) === index;
  });
  for (let i=0;i<uniqueChars1.length;i++){
      if (uniqueChars2.indexOf(uniqueChars1[i])!=-1) {
          let pos1=str1.indexOf(uniqueChars1[i]);
          let count1=0;
          while (pos1 !== -1) {
              count1++;
              pos1 = str1.indexOf(uniqueChars1[i],pos1+1);
          }
          let pos2=str2.indexOf(uniqueChars1[i]);
          let count2=0;
          while (pos2 !== -1) {
              count2++;
              pos2 = str2.indexOf(uniqueChars1[i],pos2+1);
          }
          result+=min(count1,count2);
      }
  }
  return result;
}

function min(a,b){
  if (a>=b) {return b} 
  else return a;
}

module.exports = {
  getCommonCharacterCount
};
