let arr = [5,2,3,4,6,9,3,7];
let data = 3;
let res = lastOccuranceIndex(0, arr, data)
console.log(res)
function lastOccuranceIndex(i, arr, data){
    if(arr[i] === undefined) return -1;
    let lastIndex = lastOccuranceIndex(i+1, arr, data);
    if(lastIndex === -1){
        if(arr[i] === data){
            return i;
        }else{
            return -1;
        }
    }else{
        return  lastIndex
    }
}