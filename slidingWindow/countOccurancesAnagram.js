// let str = "forxxorfxdofr";
// let ptn = "for";
// let cnt = 0;
// let obj = {}
// let k = ptn.length;
// let res = 0;
// for(let i=0; i<k; i++){
//     if(obj[ptn[i]] === undefined){
//         obj[ptn[i]] = 1;
//         // total length of obj
//         cnt++;
//     }else{
//         obj[ptn[i]]++;
//     }
// }

// let i =0;
// let j= 0;
// while(j<str.length){
//     if(obj[str[j]]){
        
//         obj[str[j]]--;
//         if(obj[str[j]] ==0){
//             cnt--;
//         }
//     }
//     if(j-i+1 < k){
//         j++;
//     }else if(j-i+1 == k){
//         if(cnt === 0){
//             res++;
           
//         }
//         if(obj[str[i]]){
//             obj[str[i]]++;
//             if(obj[str[i]] == 1){
//                 cnt++;
//             }
//         }
//         i++;
//         j++;
//     }
   
// }

// console.log(res)
//    console.log(cnt)

   // let s1 = "abs c";
// let s2 = "c ab  s";

let str = "aabaabaa";
let word = "aaba";
console.log(countAnagram(str, word))


function areAnagram(s1, s2){
    let obj = {};

    for(let i=0; i<s1.length; i++){
        obj[s1[i]] === undefined ? obj[s1[i]] = 1 : obj[s1[i]]++;
    }
    
    for(let j=0; j<s2.length; j++){
        obj[s2[j]] !==undefined ? obj[s2[j]]-- : obj[s2[j]]++;
    }
    let bool = true;
    for(let k in obj){
        
        if(obj[k] !== 0){
            
            bool = false;
        }
    }
    if(bool){
        return true;
    }else{
       return false;
    }
}

function countAnagram (str, word){
    let res = 0;
    for(let i=0; i<str.length - word.length+1; i++){
       let x =  areAnagram(str.substring(i, i+word.length), word)
       if(x){
           res++;
       }
    }
    return res;
}

