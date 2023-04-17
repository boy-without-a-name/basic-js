const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count=1
  let newStr = "";
  let arr =Array.from(new Set(str));

  for(let i =0; i<arr.length; i++){
     for (let y=0; y < str.length; y++){
        if(arr[i] == str[y] && arr[i] == str[y+1]){
           count+=1;
        }
     } 
     if(count>1){
        newStr+=`${count}`+arr[i];
        count=1;
     }else {
        newStr+=arr[i];
        count=1;
     }
  } return newStr;
}

module.exports = {
  encodeLine
};
