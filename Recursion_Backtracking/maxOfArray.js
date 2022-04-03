// let arr = [4,5,1,-1,1,0]; 
// let max = Infinity;
// console.log(maxOfArray(0, arr))

// function maxOfArray(i, arr){
//      if(arr[i] === undefined) return;

     
//      if(arr[i] < max) max = arr[i];
//       maxOfArray(i+1, arr)
//       return max;
// }

let arr = [2,5,0,1,-15,2]
function maxOfArray(i, arr){

      if(i === arr.length - 1){
          return arr[i]
      }
    let maxInSmallerArr = maxOfArray(i+1, arr)
    if(maxInSmallerArr < arr[i]){
        return maxInSmallerArr;
    }else{
        return arr[i]
    }
}

console.log(maxOfArray(0, arr))