// function sortByHeight(arr) {
//     // let array = [...arr];
//     // array = array.sort();
//     // let i = array.legth;
//     // arr = arr.reverse();
//     // for(let key =0; key< arr.legth; key++){
//     //     if(arr[key] !== -1){
//     //         console.log(arr[key])
//     //         arr[key] = array[i-1];
//     //         i--;
//     //     }
//     // }return arr.reverse();
//     arr= arr.sort(function(a,b){
//         if(a != -1 || b != -1){
//             return a-b;
//         } return -1;
//     })
//   return arr;
// }
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

// class DepthCalculator {

//     calculateDepth(arr) {
//         for(let key of arr){
//             if(typeof(key)==Array.isArray()){
//                 return 2 
//             }
//         }

//     }
//    } 
// console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 5);

function sortByHeight(arr) {
   let array = [...arr];
   array = array.sort();
   let i = array.length;
   arr = arr.reverse();
   for(let key =0; key< arr.length; key++){
       if(arr[key] != -1){
           arr[key] = array[i-1];
           i--;
       }else{arr[key] = arr[key]}
   }return arr.reverse();
}
let arr = [-1, 150, 190, 170, -1, -1, 160, 180]
console.log(sortByHeight(arr))
