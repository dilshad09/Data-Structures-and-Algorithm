function powerOfNumInLog(x, n){
     if(n=== 0) return 1;
    let power = Math.floor(n/2)
    let res = powerOfNumInLog(x,power)
    let result = res*res;
    
    if(n%2 === 1) result = result*x;
    return result;
}

console.log(powerOfNumInLog(2, 5))

