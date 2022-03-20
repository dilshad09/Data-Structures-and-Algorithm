
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;
  for(let i=0; i<test; i++){
      let [n,v] = input[line++].trim().split(" ").map(Number);
      let arr = input[line++].trim().split(" ").map(Number);
      console.log(findClosestV(n, v, arr))
  }
    function findClosestV(n, v, arr){
      let closestSum = Number.MIN_SAFE_INTEGER;
      let minDiff = Number.MAX_SAFE_INTEGER;
     arr.sort((a,b)=>{
       return a - b;
     })

        for(let i=0; i<n-2; i++){ 
          let start = i+1;
          let end = arr.length - 1;
          while(start < end){
            let tripletSum = arr[i] + arr[start] + arr[end];
            if(tripletSum === v) {
              return tripletSum;
            }
            else if((Math.abs(tripletSum - v ) <= minDiff) && tripletSum > closestSum){
              minDiff = Math.abs(tripletSum - v);
              closestSum = tripletSum;
            
            }
            
             if(tripletSum < v){
              start++;
            }else{
              end--;
            }
           }
        }
      return closestSum;
    }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`2
    4 1
    -1 2 1 -4
    3 1
    0 0 0`);
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
  

  