
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map(Number);
      let k = +input[line++]
      console.log(pairLessThanK(n,arr,k))
  }

  function pairLessThanK(n,arr,k){
      arr.sort((a,b)=>{
          return a - b;
      })
      let max = -Infinity;
      let bool = false;
      let i =0;
      let j = n-1;
      while(i<j){
          let sum = arr[i] + arr[j];
          if(sum >= k){
              j--
          }else{
              bool = true;
              if(max < sum){
                  max = sum;
                  
              }
              i++;
          }

      }
      if(bool){
          return max;
      }else{

          return -1
      }
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`3
    18
26 12 12 38 96 91 26 54 54 54 10 46 46 6 28 72 56 75
30
7
3 2 1 4 1 2 6
9
    3
30 10 20
15`);
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
  

  