let arr = [1,2,3,3,2,4,6,1,6];
let xor = 0;
for(let i=0; i<arr.length; i++){
    xor ^= arr[i];
}
console.log(xor)

// console.log(1^2^3^2^4^6^1^6)