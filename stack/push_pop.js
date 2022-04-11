
function runProgram(input) {
  input = input.trim().split("\n");
  let operation = +input[0];
  let line = 1;
  let stack = []
    for(let i=0 ; i<operation; i++){
        let x = input[line++].trim().split(" ").map(Number);
        if(x[0] === 1){
            stack.push(x[1]);
        }else if(x[0] === 2){
            if(stack.length !==0){
                stack.pop()
            }
        }else{
            if(stack.length === 0){
                console.log("Empty!")
            }else{
                console.log(stack[stack.length -1])
            }
        }
    }

}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`6
    1 15
    1 20
    2
    3
    2
    3`);
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
  

  