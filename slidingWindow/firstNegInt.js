let arr = [1,-2,3,5,-3,-5,8,9,11];
// // Brute force approach
// // TC= O(n*k) && SP=O(1) only for printing ans , taking space
// let n = arr.length;
// let k = 3;
// let ans = []
// for(let i=0; i<n-k+1; i++){
//     let bool = true;
//     for(let j=i; j<i+k; j++){
//         if(arr[j] <0){
//             ans.push(arr[j])
//             bool = false;
//             break;
//         }
//     }
//     if(bool) ans.push(0)
// }
// console.log(ans)

// Optimized solution = sliding window
// T = O(n) & S = O(n), taking arr for ans
let i=0;
let j=0;
let k = 3;
let n = arr.length;
let stack = []
let ans = ""
while(j<n){
    if(arr[j] < 0) stack.push(arr[j])
    if(j - i + 1 < k){
        j++;
    }else if(j - i + 1 === k){
        if(stack.length ===0){
            ans += " " + 0
        }else{
            ans += " " + stack[0]
            if(arr[i] === stack[0]){
                stack.shift()
            }
        }
        i++;
        j++;

    }
}

console.log(ans)