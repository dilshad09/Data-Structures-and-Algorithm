
function runProgram(input) {
  input = input.trim().split('\n');
  let test = +input[0];
  let line = 1;

  for(let i=0;i<test; i++){
      let n = +input[line++];
      let arr = input[line++].trim().split(' ').map(Number);
      squreSort(n, arr)
  }
  function squreSort(n,arr){
      
     for(let i=0; i<n; i++){
         arr[i] = [arr[i],arr[i]**2]
     }
     arr.sort((a,b)=>{

        return a[1] - b[1]
     })
     for(let j =0; j<n; j++){
         arr[j] = arr[j][0]
     }
     console.log(arr.join(" "))
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`1
    5
    -2 3 1 -4 6
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
  

  