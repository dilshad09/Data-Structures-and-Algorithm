let arr = [1,2,3,4,5];
let i=0;
let j = arr.length -1;
function swap(arr,i,j){
     return [arr[i], arr[j]] = [arr[j],arr[i]];
     
}
while(i<j){
   
    // [arr[i], arr[j]] = [arr[j], arr[i]]
    swap(arr,i,j)

    i++;
    j--;
}

console.log(arr);