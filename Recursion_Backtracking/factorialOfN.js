function factorialOfNum(n){
     if(n === 0) return 1;
    return n * factorialOfNum(n-1)
}

console.log(typeof factorialOfNum(5))