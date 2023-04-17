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
function sortByHeight(arr) {
  let array = [...arr];
  array = array.sort( (a, b) => a - b );
  let i = array.length;
  arr = arr.reverse();
  for(let key =0; key< arr.length; key++){
      if(arr[key] != -1){
          arr[key] = array[i-1];
          i--;
      }else{arr[key] = arr[key]}
  }return arr.reverse();

}

module.exports = {
  sortByHeight
};
