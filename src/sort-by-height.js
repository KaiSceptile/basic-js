const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array){
    let sorted=deleting(array);
    let ind=0;
    for (let i=0; i<array.length;i++){
        if (array[i]!=-1) {
            array[i]=sorted[ind];
            ind++;
            }
    }
    return array;
}
function deleting(array){
    let res=array.filter(num => num!=-1);
    res=res.sort((a,b)=>a-b);
    return res;
}

module.exports = {
  sortByHeight
};
