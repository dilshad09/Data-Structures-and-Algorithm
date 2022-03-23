
function runProgram(input) {
  input = input.trim().split("\n");
  let operations = +input[0];
  let line = 1;
  let stack = [];
  for(let i=0; i<operations; i++){
   
      let data = input[line++].trim().split(" ")
      justMIn(data,stack)
  }

   function justMIn(data, stack){
     
       
       function min(stack){
           if(stack.length == 0){
               console.log("EMPTY")
           }else{

               console.log(Math.min.apply(null, stack))
           }
       }
        
       switch(data[0]){
           case 'PUSH' : stack.push(+data[1]);
           break;
           case 'POP': stack.length === 0 ? console.log("EMPTY"): stack.pop(); 
           break;
           case 'MIN': min(stack)
           break;

       }
      
   }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`10
    POP
    POP
    POP
    PUSH 68
    PUSH 14
    MIN
    PUSH 19
    PUSH 12
    PUSH 7
    MIN`);
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
  

  