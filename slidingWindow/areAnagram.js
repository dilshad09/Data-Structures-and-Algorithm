// let s1 = "abs c";
// let s2 = "c ab  s";

let str = "aabaaaba";
let word = "aaab";
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

