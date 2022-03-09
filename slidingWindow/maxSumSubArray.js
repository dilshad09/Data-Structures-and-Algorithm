// let arr = [1,2,3,-1,5,0,9];
// let max = Number.MIN_VALUE;
// let k = 3;
// for(let i=0; i<=arr.length-k; i++){
//     let sum = 0;
//     for(let j=i; j<k+i; j++){
//         sum += arr[j]
        
//     }
//     if(sum > max){
//         max = sum;
//     }

// }
// console.log(max)

let arr = [1,2,3,-1,5,0,9]

let max = -Infinity;
let sum = 0;
let i =0;
let j = 0;
let k = 3;
let n = arr.length;
while(j<n){
    sum += arr[j];
    if(j-i+1 < k){
        j++;
    }else if (j-i+1 === k){
        if(sum > max){
            max = sum;
        }
        sum -= arr[i];
        j++;
        i++;
    }
}
console.log(max)