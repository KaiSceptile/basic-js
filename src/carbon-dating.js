const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(Activity){
  if (arguments.length==0) return false;
  if (isNaN(Activity)) return false;
  if (!Activity) return false;
  if (Activity*1<=0) return false;
  if (Activity>MODERN_ACTIVITY) return false;
  if (typeof Activity !='string') return false;
  //HALF_LIFE_PERIOD=5730;
  //MODERN_ACTIVITY=15;
  let k=0.693/HALF_LIFE_PERIOD;
  let t=Math.ceil(Math.log(MODERN_ACTIVITY/Activity)/k);
  return t;
}

module.exports = {
  dateSample
};
