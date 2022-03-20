// let arr = [2,0,5,-1,0,6,6,9];

// for(let i=1; i<arr.length; i++){
//     let curr = arr[i]
//     let j = i-1;

//     while(arr[j] > curr && j>=0 ){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = curr;
// }
// console.log(arr)


// for(let i=1; i<arr.length; i++){
//     let j = i - 1;
//     let curr = arr[i];

//     while(arr[j] > curr && j>=0){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = curr;
// }

// let arr = [1,0,5,-1,3,-4];

// for(let i=1; i<arr.length; i++){
//     let j = i-1;
//     let temp = arr[i];
//     while(arr[j] < curr & j>=0){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = curr;
// }
// console.log(arr)

let arr = [1,0,5,-1,3,-4];

// insertion sort- time complexity worst(if array is sortedin descending order and you are sorting in ascending order) O(n^2)
// best case (if array is sorted in ascending order and you are sorting in  ascending order)

// insertion sort - sorted sublist and unsorted sublist
for(let i=1; i<arr.length; i++){
    let temp = arr[i];
    let j = i - 1;

    
    while( j>=0 &&  arr[j] < temp){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j + 1] = temp;
}
console.log(arr)