
function runProgram(input) {
  input = input.trim().split("\n");
  let [Nscore, NsuperOver, Nfours] = input[0].trim().split(" ").map(Number)
  let [Escore, EsuperOver, Efours] = input[1].trim().split(" ").map(Number)

  if(Nscore>Escore){
      console.log("New Zealand")
  }else{
    if((Nscore === Escore) && NsuperOver > EsuperOver){
        console.log("New Zealand")
      }else{
         if( (Nscore === Escore) && (NsuperOver === EsuperOver) && (Nfours > Efours)){
            console.log("New Zealand")
          }else{
              console.log("England")
          }
      }
  }
  
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`230 48 9
    233 45 10
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
  

  