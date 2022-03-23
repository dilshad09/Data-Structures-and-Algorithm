// lesser element to right;
// brute force
// let arr = [5,4,1,0,1,1,-5,9,8,-1,-3]

// let ans  = [];

// for(let i=0; i<arr.length; i++){
//     let bool = true;
//     for(let j=i; j<arr.length; j++){
//         if(arr[i] > arr[j]){
//             bool = false;
//             ans.push(arr[j]);
//             break;
//         }
//     }
//     if(bool){
//         ans.push(-1)
//     }
// }
// console.log(ans)

// optimized solution

let arr = [5,4,1,0,1,1,-5,9,8,-1,-3]
let stack = [];
let ans = []

let n = arr.length;

while(n--){
    if(stack.length == 0){
        ans.push(-1)
    }else {
        while(stack.length !=0 && stack[stack.length - 1] >= arr[n]){
            stack.pop()
        }
        if(stack.length == 0){
            ans.push(-1)
        }else{
            ans.push(stack[stack.length - 1])
        }
    }
    stack.push(arr[n])
}
console.log(ans.reverse())