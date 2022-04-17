let arr = [[[[[[[[[1,2,3]]]]]]]]]
let cnt =0;
console.log(flattenArray(arr))
console.log(cnt)
function flattenArray(arr){
    let stack = [...arr];
    let ans = []
    
    while(stack.length){
        let pop = stack.pop();
        
        if(Array.isArray(pop)){
            stack.push(...pop)
            cnt++;
        }else{
            ans.push(pop)
            cnt++;
        }
    }
    return ans;
}

// function flattenArray(arr){
//     let ans = arr.reduce((acc,item)=>{
//         if(Array.isArray(item)){
//             acc = acc.concat(flattenArray(item))
//             cnt++;
//         }else{
//             acc.push(item)
//             cnt++;
//         }
//         return acc;
//     },[])
//     return ans;
// }