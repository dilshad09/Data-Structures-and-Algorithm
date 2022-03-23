// next greater element to left
let arr = [1,5,0,-1,2,-1,1,1,1,0] 
// brute force 
let ans = []
// for(let i = 0; i<arr.length; i++){
//     let bool = true;

//     for(let j=i; j>=0; j--){
//         if(arr[i] < arr[j]){
//             bool = false;
//             ans.push(arr[j])
//             break;
//         }
//     }
//     if(bool) ans.push(-1)
// }
// console.log(ans)

// optimized solution

let stack = [];
for(let i =0; i<arr.length; i++){
    while(stack.length !==0 && arr[i] >= stack[stack.length - 1]){
        stack.pop()
    }
    if(stack.length === 0){
        ans.push(-1)
    }else{
        ans.push(stack[stack.length - 1])
    }
    stack.push(arr[i])
}
console.log(ans)