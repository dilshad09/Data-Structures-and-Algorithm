function printIncreasingNum(n){
    if(n===0) return;
    console.log(n)
    printIncreasingNum(n-1)
    console.log(n)
    return;
}

printIncreasingNum(5)