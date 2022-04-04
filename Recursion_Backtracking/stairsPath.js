let stairs = 3;
let options = [1,2,3]
let ways = []
console.log(printPath(stairs, ""));
 console.log(ways)
function printPath(stairs, path){
    if(stairs < 0) return 0;
    if(stairs === 0){
        ways.push(path)
        console.log(path)
        return 1;
    }
    
    let paths1 = printPath(stairs-1, 1 + path)
    let paths2 = printPath(stairs-2, 2 + path)
    let paths3 = printPath(stairs-3, 3 + path)
    let paths = paths1 + paths2 + paths3;
    return paths
}