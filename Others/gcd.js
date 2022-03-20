
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;
  for(let i=0; i<test; i++){
      let [n1,n2] = input[line++].trim().split(" ").map(Number);
      console.log(gcd(n1,n2));
  }


  function gcd (n1, n2){
      let min = Math.min(n1,n2);
      let max = Math.max(n1,n2);

      let x = max%min;
      if(x === 0) return min;
      if(x === 1) return 1;
      return gcd(x, min)
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`2
    6 9
    2 25`);
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
  

  