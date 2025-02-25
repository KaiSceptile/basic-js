const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str,obj){
let rep=obj["repeatTimes"];
if (typeof(rep)== 'undefined') rep=1;
let addRepeat=obj["additionRepeatTimes"];
let adding=obj["addition"];
if ((typeof adding != 'undefined')&&(typeof(addRepeat)== 'undefined')) {addRepeat=1;}
else {if (typeof(addRepeat)== 'undefined') addRepeat=0;}
let separator=obj["separator"];
if (typeof(separator)== 'undefined') separator="+";

let addSep=obj["additionSeparator"];
if (typeof(addSep)== 'undefined') addSep="|";
let result="";
for (let i=1;i<=rep;i++){
result=result+str;
for (let j=1; j<=addRepeat; j++){
    result=result+adding;
    if (j<addRepeat) {result=result+addSep}
}
if (i<rep) result=result+separator;
}
return result;
}

module.exports = {
  repeater
};
