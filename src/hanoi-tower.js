const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(diskNumber,turnsSpeed){
let turns=getTurns(diskNumber);
let seconds=Math.floor(turns/turnsSpeed*3600);
return {turns:turns, seconds: seconds};
}

function getTurns(diskNumber){
let turn=0;
if (diskNumber===1) {turn++;} else
{
    turn+=getTurns(diskNumber-1);
    turn++;
    turn+=getTurns(diskNumber-1);
}
    return turn;

}

module.exports = {
  calculateHanoi
};
