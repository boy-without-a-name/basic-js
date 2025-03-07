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
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
  let copyArr = [];
  arr.forEach(v=>copyArr.push(v));
  let transform_arr = [];
  function double_next(index){
    return copyArr[++index];
  }
  function double_prev(index){
      return copyArr[--index];
  }
  function discard_prev(index){
      transform_arr.splice(index-1,1)
  }
  function discard_next(index){
      delete copyArr[++index];
  }

  copyArr.forEach((item,index)=>{
    if(item == '--double-next') transform_arr.push(double_next(index));
    else if(item == '--double-prev') transform_arr.push(double_prev(index));
    else if(item == '--discard-prev') discard_prev(index);
    else if(item== '--discard-next') discard_next(index);
    else transform_arr.push(item);
  });
  return transform_arr.filter(item=>item !== undefined)
}

module.exports = {
  transform
};
