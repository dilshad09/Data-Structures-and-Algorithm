
function runProgram(input) {
  input = input.trim().split("\n");
  let operations = +input[0]
  let queue = []
  for(let i=0; i<operations; i++){
    buyTicket(input[i+1].trim().split(" "))
  }

  function buyTicket(input){
      if(input[0] === 'E'){
          queue.push(+input[1])
          console.log(queue.length)
      }else if(input[0] === 'D'){
        if(queue.length){
          let left = queue.shift()
           console.log(left, queue.length)
        }else{
          console.log(-1, queue.length)
        }
      }
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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
  

