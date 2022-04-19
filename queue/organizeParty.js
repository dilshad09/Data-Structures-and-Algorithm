
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let stack = [];
  let queue = [];
  for(let i=0;i<test; i++){
      organizeParty(input[i+1].trim().split(" ").map(Number))
  }

   function organizeParty(arr){
        
        if(arr[0] === 1){
            queue.push(arr[1]);
        }else if(arr[0] === 2){
            stack.push(arr[1]);
        }else if(arr[0] === 3){
            if(queue.length !==0){
                console.log(queue[0]);
            }else{
                console.log(-1);
            }
        }else if(arr[0] === 4){
            if(stack.length !==0){
                console.log(stack[stack.length -1]);
            }else{
                console.log(-1);
            }
        }else if(arr[0]===5){
            stack.push(queue.shift())
        }
   }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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
  

  