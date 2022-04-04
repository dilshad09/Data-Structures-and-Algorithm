// let str = "abc";

// printPermutation(str, "")

// function printPermutation(str, permutation){
//     if(str.length === 0) {
//         console.log(permutation)
//         return;
//     }
//     for(let i=0; i<str.length; i++){
//         let char = str.charAt(i);
//         let lstr = str.substring(0,i);
//         let rstr = str.substring(i+1);
//         let newStr = lstr + rstr;
//         printPermutation(newStr, permutation + char)
//     }
// }

let arr = [1,2,3];

printPermutation(arr, [])

function printPermutation(arr, permutation){
     if(arr.length === 0){
         console.log(permutation.reduce((cv, v)=>{
             return cv + v;
         }))
         return;
     }
    for(let i=0; i<arr.length; i++){
        
        let char = arr[i];
        let larr = arr.slice(0,i);
        let rarr = arr.slice(i+1);
        let newArr = [...larr,...rarr];
        printPermutation(newArr, [...permutation, char])
    }
}