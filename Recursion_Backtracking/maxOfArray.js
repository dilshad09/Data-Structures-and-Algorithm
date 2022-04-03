let arr = [4,5,1,-1,1,0] 
let max = Infinity;
console.log(maxOfArray(0, arr))

function maxOfArray(i, arr){
     if(arr[i] === undefined) return;

     
     if(arr[i] < max) max = arr[i];
      maxOfArray(i+1, arr)
      return max;
}