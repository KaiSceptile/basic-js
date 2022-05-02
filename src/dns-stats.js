const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(array){
  let obj={};
  for (let dns of array){
      //if (dns[0]!='.') dns='.'+dns;
      dnsarr=dns.split('.');
      let str="";
      for (let i=dnsarr.length-1;i>=0;i--){
          str+='.'+dnsarr[i];
          if (typeof obj[str]=='undefined'){
              obj[str]=1;
          } else {
              obj[str]++;
          }       
      }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
