let arr = [1,3,-3,5,5,-2,0];
// ascending  & desceding order

for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-i; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr)