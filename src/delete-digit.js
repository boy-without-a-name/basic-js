const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    n = n.toString();
    let maxnumber = n.slice(0,n.length-1);
    for(let i = n.length-2,y = n.length - 1;i>=0;i--,y--){
        let str = n.slice(0,i) + n.slice(y);
        if(str > maxnumber) maxnumber = str;
    }
    return +maxnumber
}

module.exports = {
  deleteDigit
};
