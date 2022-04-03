let arr = [10,20,30,40,50] 
function printArray(i, arr){
    if(!arr[i]) return;
    
    printArray(i+1, arr)
    console.log(arr[i])
    return;
}

printArray(0, arr)