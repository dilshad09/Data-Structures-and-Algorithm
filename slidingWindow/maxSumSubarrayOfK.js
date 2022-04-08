
function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number)
  maxSumSubarrayOfSizeK(n,k,arr)


  function maxSumSubarrayOfSizeK(n,k, arr){
      let max = -Infinity;
// brute force approach
    //   for(let i=0; i<n; i++){
    //       let sum = 0;
    //       for(let j=i; j<n; j++){
    //          sum += arr[j];
    //         if(j-i+1 === k){
    //             if(sum > max) {
    //                 max = sum;
    //             }
    //         }
    //       }
         
    //   }

    // sliding window
    let i =0;
    let j= 0;
    let sum = 0;
    while(j<n){
        sum += arr[j];
        if(j-i+1 < k){
            j++;
        }else if(j-i+1 === k){
            if(sum > max){
                max = sum;
            }
            sum -= arr[i];
            i++;
            j++;
        }
    }
      console.log(max)
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  

  