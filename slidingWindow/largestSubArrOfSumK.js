// let arr = [4,1,1,1,2,3,5];
// // brute force
// let k = 5; // given sum;
// let ans = []
// let max = -Infinity;
// for(let i=0; i<arr.length; i++){
//     let sum = 0;
//     for(let j=i; j<arr.length; j++){
//         sum +=  arr[j]
//         if(sum === k){
//             let len = j - i + 1;
//             ans.push(len)
//             if(max < len){
//                 max = len;
//             }
//             break;
//         }
//     }
// }
// console.log(max)
// console.log(ans)


// sliding window
let arr = [4,1,1,1,2,3,5];
let k = 5;
let ans = []
let i =0; 
let j = 0;
let sum = 0;
let max = -Infinity;
while(j<arr.length){
    
  
    if(sum < k){
        sum += arr[j];
        j++;
    }else if(sum == k){
        let len = j-i+1;
        ans.push(len)
        j++;
        
    }else if(sum > k ){
        while(sum > k){
            sum -= arr[i]
            i++;
        }
      
    }
}
console.log(ans)