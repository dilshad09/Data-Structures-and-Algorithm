
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
        for(let i=0; i<n-2; i++){
            let ans = arr[i] + arr[i+1] + arr[i+2];
            console.log(ans)
            if(ans == v){
               
                return arr[i];
            }

        }
       
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
  

  