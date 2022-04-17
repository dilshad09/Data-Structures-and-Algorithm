let str = "grrrabcdepghijhdiwhohfbvadsdabcdepghij";

console.log(findString(str));

function findString(str){
    let set = new Set();
    let obj = {};
    let n = str.length;
   

    for(let i=0; i<n; i++){
        let substring = "";
        for(let j=i; j<n; j++){
            substring += str[j];     
            if(substring.length == 10){
                if(set.has(substring)){
                    return substring;
                }
                set.add(substring)
            }
        }
    }
    
}