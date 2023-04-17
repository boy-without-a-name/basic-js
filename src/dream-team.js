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
function createDreamTeam(members) {
  if (Array.isArray(members)){
  members = members.filter(v=>typeof(v)=='string').map(v=>v.trim().toUpperCase()).sort()
  let str ='';
  for( let key of members){
    if(typeof(key)=='string'){
      str+=key[0]
    }       
  }
  return str
} return false;
}

module.exports = {
  createDreamTeam
};
