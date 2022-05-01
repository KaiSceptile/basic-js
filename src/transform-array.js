const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr){
    if (!Array.isArray(arr)) {throw Error("'arr' parameter must be an instance of the Array!")}
    let res=[];
    let check=false;
    for (let i=0; i<arr.length; i++){
        switch (arr[i]){
        case '--discard-next':{i++; check=true;} break;
        case '--discard-prev':{res.pop(); check=true;} break;
        case '--double-next':{res.push(arr[i+1]);} break;
        case '--double-prev':{if (!check) res.push(res[res.length-1]); check=false;} break;
        default: if (typeof arr[i]==='number') res.push(arr[i]);
        }
    }
    return res;
}

module.exports = {
  transform
};
