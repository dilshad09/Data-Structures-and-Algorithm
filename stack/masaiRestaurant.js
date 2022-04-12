
function runProgram(input) {
  input = input.trim().split("\n");
  let operation = +input[0];
  let line = 1;
  let masai = []
  for(let i=0; i<operation; i++){
     masaiRestaurant(input[line++].trim().split(" ").map(Number))
  }
  function masaiRestaurant(food){

      if(food[0] === 1){
          if(masai.length === 0){
              console.log("No Food")
          }else{
              console.log(masai[masai.length -1])
              masai.pop()
          }
      }else{
          masai.push(food[1])
      }
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`6
    1
    2 5
    2 7
    2 9
    1
    1`);
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
  
