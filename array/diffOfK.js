
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let [n, k] = input[line++].trim().split(" ").map(Number);
      let arr = input[line++].trim().split(" ").map(Number);
      console.log(differeneOfK(n,k, arr));
  }

  function differeneOfK(n, k, arr){
      let i=0;
      let j=n-1;
      
      while(i<j){
        let diff = arr[j] - arr[i];
        console.log(diff, k)
        if(diff === k){
            return "Yes";
        }else if(diff > k){
            j--;
        }else{
            i++;
        }
      }
      return "No";
  }
   
    // for(let i=0; i<n; i++){
    //     for(let j=i+1; j<n; j++){
    //         let diff = arr[j] - arr[i];
            
    //         if(diff === k){
                
    //             return "Yes";
    //         }
    //     }
        
    // }

} 
  if (process.env.USERNAME === 'd') {
    runProgram(`1
    6 0
    -8 -7 5 6 6 9
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
  

  