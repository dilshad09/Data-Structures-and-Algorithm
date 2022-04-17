
function sumDigit(num){
    let n = num.length;
    let min = Infinity;
    let val = null;

    for(let i=0; i<n; i++){
        let left = 0;
        let right =0;
        let pos = +num[i]
        while((pos--)){
            left += +num[i-1-pos] || 0 ;
            
        }
        let k=i;
        while(k< (i+ Number(num[i]))){
            right += +num[k +1] || 0;
            k++;
        }
        let sum = left + right
        if(min >= sum){
            min = sum;
            val = +num[i]
        }
       
    }
    if(val == 1){
        return true;
    }else{
        return false;
    }
}

sumDigit("34315")
