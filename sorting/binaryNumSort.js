// let arr = [0,1,0,1,0,0,1,1,1,0]
// let i=0; 
// let j = arr.length-1;
// while(i<=j){
//     if(arr[i]==0 ){
//         i++;
//     }else if(arr[i] ==0 && arr[j] ==0){
//         i++;
//     }else if(arr[i] ==0 && arr[j] == 1){
//         i++;
//         j--;
//     }else if(arr[i] ==1 && arr[j] ==0){
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         i++;
//         j--;
//     }else if(arr[i] ==1 && arr[j] ==1){
//         j--;
//     }
// }
// console.log(arr)


// descending order 

// let arr = [0,1,0,1,0,0,1,1,1,0]
// let i=0; 
// let j = arr.length-1;
// while(i<=j){
//     if(arr[i]==1 ){
//         i++;
//     }else if(arr[i] ==0 && arr[j] ==0){
//         j--;
//     }else if(arr[i] ==1 && arr[j] == 0){
//         i++;
//         j--;
//     }else if(arr[i] ==0 && arr[j] ==1){
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         i++;
//         j--;
//     }else if(arr[i] ==1 && arr[j] ==1){
//         i++;
//     }
// }
// console.log(arr)


let arr = [0,1,0,1,0,0,1,1,1,0]

let i = 0;
let j = arr.length - 1;

while(i<j){
    if(arr[i] == 0 && arr[j] ==0){
        i++;
    }else if(arr[i] == 0 && arr[j] ==1 ){
        i++;
        j--;
    }else if(arr[i] == 1 && arr[j] == 0){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }else if(arr[i] == 1 && arr[j] == 1){
        j--;
    }
}
console.log(arr)
