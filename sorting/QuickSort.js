// let arr = [7,6,5,4,5,4,3,3,3,2,1];
// let high = arr.length;
// quickSort(arr,high-1, 0);
//  console.log(arr)
// function quickSort(arr,high,low){
//     if(low < high){
        
//        let loc = patition(arr, high, low);
//        quickSort(arr, loc-1, low);
//        quickSort(arr, high, loc+1)
//        return;
//     }
// }

// function patition(arr, high, low){
    
//       let pivot = arr[low];
//       let i = low;
//       let j = high;

//       while(i < j){
//         console.log(i,j)
//         while(arr[i] <= pivot && i<high) i++;
//         while(arr[j] > pivot && j >low ) j--;
//         if(i<j){
//             swap(arr,i,j);
//         } 
//       }
//       swap(arr, low,j)
//       return j;
// }
// function swap(arr, i, j){
//     return [arr[i], arr[j]] = [arr[j], arr[i]]
// }


let arr = [7,6,5,4,5,0,4,-1,3,-3,3,2,1];

quickSort(arr, 0, arr.length-1);
console.log(arr)

function quickSort(arr,low, high){
    if(low < high){
        let pos = partition(arr, low, high);
        quickSort(arr, low, pos-1)
        quickSort(arr, pos+1, high);
        return ;
    }
}

function partition(arr, low, high){
    let pivot = arr[low];
    let i = low ;
    let j  = high;

    while(i<j){
        
        while(arr[i] >= pivot && i< high) i++;
        while(arr[j] < pivot && j>low) j--;
        if(i<j){
            swap(arr, i,j);
        }
    }
    swap(arr, low, j) 
    return j;
}

function swap(arr, i, j){
    return [arr[i], arr[j]] = [arr[j], arr[i]];
}