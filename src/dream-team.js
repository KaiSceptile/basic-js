const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members){
    if (!Array.isArray(members)) {
        return false
    } else {
        
        strarr=[];
        for (let str of members){
            if (typeof str === 'string') strarr.push(str);
        }
       
        let res='';
        for (let i=0;i<strarr.length;i++){
            strarr[i]=strarr[i].trim();
            strarr[i]=strarr[i].toUpperCase();
        }
        strarr.sort();
        for (let value of strarr){
           
            res+=value[0];
        }
        return res;
    }
}

module.exports = {
  createDreamTeam
};
