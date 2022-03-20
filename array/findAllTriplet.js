let arr = [1,-1,2,3,4,-2,-1];
// brute force method
let ans = [];
let cnt = 0

for(let i=0; i<arr.length-2; i++){
    for(let j=i+1; j<arr.length; j++){
        for(let k=j+1; k<arr.length; k++){
            
            ans[cnt] = [i,j,k]
            cnt++;
        }
    }
}
console.log(ans)