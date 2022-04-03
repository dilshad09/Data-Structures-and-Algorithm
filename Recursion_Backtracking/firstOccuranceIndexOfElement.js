let arr = [1,5,4,6,3,4,2,9];
let elem  = 4;
let ans = firstIndexOfElement(0, arr, elem)
console.log(ans)
function firstIndexOfElement(i, arr, elem){
  
     if(arr[i] === undefined) return -1;

     let index = firstIndexOfElement(i+1, arr, elem)
    //  console.log(index)
     if(arr[i] === elem){
        return i
     }else{
         return index;
     }
    
}