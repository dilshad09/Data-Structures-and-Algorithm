
function runProgram(input) {
  input = input.trim().split("\n");
  let [n, mod] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  moduloSort(n,mod,arr)

  function moduloSort(n, mod, arr){
  

      for(let i=0; i<n; i++){
      
          for(let j=0; j<n-1-i; j++){
              if(arr[j]%mod > arr[j+1]%mod){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
              }
          }
        
          
      }
    
      console.log(arr.join(" "))
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`5 6
    12 18 17 65 46`);
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
  

  