let arr = [1,2,-3,4,-2,5,6,8];
let k = 3;
let ans = [];

// for(let i=0; i<arr.length - k + 1; i++){
//     let max = -Infinity;
   
//     for(let j=i; j< i+k; j++){
//         if(max < arr[j]){
//             max = arr[j]
           
//         }
//     }
//    ans.push(max)
// }
// console.log(ans)

let i=0;
let j=0;
let max = -Infinity
while(j<arr.length){
    if(max<arr[j]){
        max = arr[j]
    }
    if(j-i+1 < k){
        j++;
    }else if(j-i+1 === k){
        ans.push(max)
        if(arr[i] === max){
            max = -Infinity;
            for(let k=i+1; k<=j; k++){
                if(max < arr[k]){
                    max = arr[k]
                }
            }
        }
        i++;
        j++;
    }
}
console.log(ans)