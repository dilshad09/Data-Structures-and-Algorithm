
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
 
  for(let i=0; i<test; i++){
      console.log(happyNumber(input[i+1].trim()))
  }

  function happyNumber(n){
      let set = new Set()
      let x ;
      while(true){
        
         x = sumNumber(String(n))
          if(x === 1) return true;
        
          if(set.has(x)) { 
            return false
          } else{
            set.add(x);
            // [x,n] = [n,x]
            n = x;
          }
         
      }
      
  }

  function sumNumber(n){
      let sum =0;
      for(let i=0; i<n.length; i++){
        sum += (Number(n[i]))**2
      }
      return sum;
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`1
    2
    `);
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
  
