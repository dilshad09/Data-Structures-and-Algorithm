function powerLinear(x, n){
    if(n===0) return 1;
    return x * powerLinear(x, n-1)
}

console.log(powerLinear(2,5))