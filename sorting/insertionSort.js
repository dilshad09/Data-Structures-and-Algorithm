let arr = [2,0,5,-1,0,6,6,9];

for(let i=1; i<arr.length; i++){
    let curr = arr[i]
    let j = i-1;

    while(arr[j] > curr && j>=0 ){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = curr;
}
console.log(arr)