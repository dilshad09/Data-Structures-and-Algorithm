// // let arr = [2,0,5,-1,0,6,6,9];

// // for(let i=1; i<arr.length; i++){
// //     let curr = arr[i]
// //     let j = i-1;

// //     while(arr[j] > curr && j>=0 ){
// //         arr[j+1] = arr[j];
// //         j--;
// //     }
// //     arr[j+1] = curr;
// // }
// // console.log(arr)


// // for(let i=1; i<arr.length; i++){
// //     let j = i - 1;
// //     let curr = arr[i];

// //     while(arr[j] > curr && j>=0){
// //         arr[j+1] = arr[j];
// //         j--;
// //     }
// //     arr[j+1] = curr;
// // }

// // let arr = [1,0,5,-1,3,-4];

// // for(let i=1; i<arr.length; i++){
// //     let j = i-1;
// //     let temp = arr[i];
// //     while(arr[j] < curr & j>=0){
// //         arr[j+1] = arr[j];
// //         j--;
// //     }
// //     arr[j+1] = curr;
// // }
// // console.log(arr)



// // insertion sort- time complexity worst(if array is sortedin descending order and you are sorting in ascending order) O(n^2)
// // best case (if array is sorted in ascending order and you are sorting in  ascending order)

// // insertion sort - sorted sublist and unsorted sublist
// // for(let i=1; i<arr.length; i++){
// //     let temp = arr[i];
// //     let j = i - 1;

    
// //     while( j>=0 &&  arr[j] < temp){
// //         arr[j+1] = arr[j];
// //         j--;
// //     }
// //     arr[j + 1] = temp;
// // }
// // console.log(arr)


// // let arr = [1,0,0,1,0,0];
// // let n = arr.length;

// // for(let i=0; i<n; i++){
// //     let j = i+1;

// //     while(j>=0){
// //         if(arr[j] > arr[j-1]){
// //             [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
// //         }else{
// //             break;
// //         }
// //         j--;
// //     }
// // }
// // console.log(arr)



// // let arr = [1, 5, 3, 2, 6, 9]
// // let cnt = 0
// // arr.sort((a,b)=>{
// //     return a -b;
// // })
// // for(let i=0; i<arr.length; i++){
// //     for(let j=i+1; j<arr.length; j++){
// //         let sum = arr[i] + arr[j]
     
// //         if(arr.includes(sum)){
// //             cnt++
// //         }
// //     }
// // }
// // console.log(cnt)

// let arr = [2, 5, 2, 8, 5, 6, 8, 8]
// let obj = {}

// for(let i=0; i<arr.length; i++){
//     if(obj[arr[i]] === undefined){
//         obj[arr[i]] = 1;
//     }else{
//         obj[arr[i]]++
//     }
// }
// let ans = []
// let cnt = 0
// for(let k in obj){
//     ans[cnt++] =[+k, [obj[k]]]
// }

// ans.sort((a,b)=>{
//     return b[1] - a[1]
// })
// let finalans = []

// for(let i=0; i<ans.length; i++){
//     for(let k=0; k<ans[i][1]; k++){
//         finalans.push(ans[i][0])
//     }
// }
// console.log(finalans)
