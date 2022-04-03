// generate all subsequence of a string
// memory are being used to store all subsequences of a string is 2^n-1 * n;
// and memory will be used to print of above the same is only (n+1)*n;

let str = "abc";

printSubseq(str, "", str.length)

function printSubseq(str, subseq, n){
    if(str.length === 0) {
        // let numOfChars = (2**(n-1)) * n;
        // console.log(numOfChars)
        console.log(subseq)
        return;
    }
    let char = str.charAt(0);
    let restStr = str.substring(1);

    printSubseq(restStr,  subseq + "",n)
    printSubseq(restStr, subseq + char,n)

}