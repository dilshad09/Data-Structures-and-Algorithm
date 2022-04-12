
function runProgram(input) {
  input  = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map(Number);
      nextGreaterElem(n, arr);
  }

   function nextGreaterElem(n, arr){
       let stack = [];
       let ans = []

       while(n--){
           while(arr[n] >= stack[stack.length -1] && stack.length){
               stack.pop()
           }
           if(!stack.length){
             ans.push(-1)
           }else{
               ans.push(stack[stack.length -1])
           }
           stack.push(arr[n])
       }
       console.log(ans.reverse().join(" "))
   }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`1
    4
    1 3 2 4`);
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
  

  