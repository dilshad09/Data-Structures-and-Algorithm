
function runProgram(input) {
  input = input.trim().split("\n");
  let opr = +input[0];
  
  let q1 = [];
  let q2 = [];
  let q3 = [];
  let q4 = [];
  
  let mainArr = []
  for(let i=0; i<opr; i++){
      let inp = input[i+1].trim().split(" ");
      masaiCodingComp(inp);
  }


  function master(n){
      let cnt = 0;
      while(cnt<mainArr.length){
          if(mainArr[cnt] == n){
              return true;
          }
          cnt++;
      }
      return false;
  }
  function masaiCodingComp(arr){
     if(arr[0] === 'E'){
         if(arr[1] == 1){
             if(mainArr.length ===0 || !master(arr[1])) mainArr.push(arr[1]);
             q1.push(arr[2])

         }
        if(arr[1] == 2){
            if(mainArr.length ===0 || !master(arr[1])) mainArr.push(arr[1]);
            q2.push(arr[2])

        }
        if(arr[1] == 3){
            if(mainArr.length ===0 || !master(arr[1])) mainArr.push(arr[1]);
            q3.push(arr[2])

        }
        if(arr[1] == 4){
            if(mainArr.length ===0 || !master(arr[1])) mainArr.push(arr[1]);
            q4.push(arr[2])

        }
     }else{
       
        if(mainArr[0] == 1){
            console.log(1, q1[0])
            q1.shift()
            if(!q1.length){
                mainArr.shift()
            }
        }
       else if(mainArr[0] == 2){
            console.log(2, q2[0])
            q2.shift()
            if(!q2.length){
                mainArr.shift()
            }
        }
       else if(mainArr[0] == 3){
            console.log(3, q3[0])
            q3.shift()
            if(!q3.length){
                mainArr.shift()
            }
        }
       else if(mainArr[0] == 4){
            console.log(4, q4[0])
            q4.shift()
            if(!q4.length){
                mainArr.shift()
            }
        }
     }
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
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
  

  

  