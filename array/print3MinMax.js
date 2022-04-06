
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  minMax(n,arr);


  function minMax(n,arr){
      let obj = {}
      for(let i=0; i<n; i++){
          obj[arr[i]] = null;
      }
      obj = Object.keys(obj).map(Number).sort((a,b)=>a -b)
      if(obj.length <3){
          console.log("Not Possible")
          console.log("Not Possible")
      }else {
          console.log(obj.slice(0,3).join(" "))
          console.log(obj.slice(obj.length -3).join(" "))
      }
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`10
    -4 -7 -2 -11 -2 -8 0 -122 -66 10`);
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
  

  