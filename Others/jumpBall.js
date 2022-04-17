let num = 100;
let cnt = 0;

while(num > 1e-5){
    num = (num - (num *10)/100)
    cnt++;
}
console.log(cnt)

// let arr = [1,6,4,6,1,5,9,8,4,9]
// let ans = [];
// arr.sort((a,b)=>a -b)
// let i =0;
// let n = arr.length;
// while(i<n){
//     let bool = false;
//     let j = i+1;
//     while(arr[i] === arr[j]){
//         j++;
//         bool = true;
//     }
//     if(bool){
//         ans.push(arr[i])
//         i = j;
//     }else{
//         ans.push(arr[i]);
//         i++;
//     }

// }
// console.log(ans)