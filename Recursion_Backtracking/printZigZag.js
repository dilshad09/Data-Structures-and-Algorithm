function printZigZag(n){
    if(n===0) return;

    console.log("pre " + n)
    printZigZag(n-1)
    console.log("In " + n)
    printZigZag(n -1)
    console.log("post " + n)
    return;
}
printZigZag(3)