const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard){
    let amount=0;
    for (let i of backyard){
        for (let box of i){
            if (box==='^^') amount++;
        }
    }
    return amount;
}

module.exports = {
  countCats
};
