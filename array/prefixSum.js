let arr = [1,-3, -3,5,6,-4,9];
// for calculation 
for(let i=1; i<arr.length; i++){
    arr[i] = arr[i] + arr[i-1]
}
console.log(arr)

// for finding sum in range
// arr[i,j] = arr[j] - arr[i-1]