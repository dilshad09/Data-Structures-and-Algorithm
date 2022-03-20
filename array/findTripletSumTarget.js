// let arr = [1,-1,2,3,4,-2,-1];
// brute force
// let target = 0;
// let cnt = 0;
// let ans = []
// let result = []
// let m= 0
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         for(let k=j+1; k<arr.length; k++){
//             ans[cnt] = arr[i] + arr[j] + arr[k]
//             if(ans[cnt] === 0){
                
//                 result[m++] = [arr[i],arr[j], arr[k]]
//             }
//             cnt++;
//         }
//     }
// }
// console.log(result)

// two pointer technique
let arr = [1,-1,2,3,4,-2,-1];
let target = 0;
arr.sort((a,b)=>{
    return a -b;
})
console.log(arr)
let result = []
let m = 0;
for(let i=0; i<arr.length-2; i++){
    let start = i+1;
    let end = arr.length-1;
   
    
   
    while(start < end){
        let sum = arr[i] + arr[start] + arr[end]
        if(sum === target){
            result[m] = [arr[i] , arr[start] , arr[end]]
            start++;
            end--;
            m++;
        }else if(sum > target){
            end--;
        }else if(sum< target){
            start++;
        }
        
    }

    
}   
console.log(result)