let arr = [5,3,1,2,5,6,-1, 5, 2];
let indices = []
let data = 5;
let cnt = 0;
allIndexOfOccurance(0, arr, data, 0)
console.log(indices, cnt)
function allIndexOfOccurance(i, arr, data, cnt){
    if(arr[i] === undefined) return -1;
    
     allIndexOfOccurance(i+1, arr, data, cnt)
    if(arr[i] === data){
        indices.push(i)
        cnt++;
    }
    return;
}