// function gridTraveller(n,m,memo={}){
//     let key = n + "," + m;
//     if(n == 1 && m===1) return 1;
//     if(n == 0 || m===0) return 0;
//     if(key in memo){
//         return memo[key]
//     }

//     memo[key] = gridTraveller(n-1,m, memo) + gridTraveller(n,m-1, memo);
//     return memo[key]
// }

// console.log(gridTrav

// function timeConversion(s) {
//     if(s.endsWith("PM")){
//         let x = s.replace("PM","")
//         x = x.trim().split(":")
//         if(+x[0] < 12){
//             x[0] = 12 + (+x[0])
//         }
//         console.log(x.join(":"))
//     }else{
//          let y = s.replace("AM","")
//         y = y.trim().split(":")
//         if(+y[0] === 12){
//             y[0] = "00"
//         }
//         console.log(y.join(":"))
//     }

// }
// timeConversion("12:05:45AM")

function countingSort(arr) {
    let n = arr.length;
    let res = []
    for(let i=0; i<n; i++){
        if(res[arr[i]] == undefined){
            res[arr[i]] = 1;
        }else{
            res[arr[i]]++
        }
    }
    for(let i=0; i<res.length; i++){
        if(res[i] === undefined){
            res[i] = i;
        }
    }
   return res;
 }

 console.log(countingSort([1,1,3,2,1]))