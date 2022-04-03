let arr = [1,2,3];
generateAllSubsets(arr, [])

function generateAllSubsets(arr, subset){
    if(arr.length == 0){
        console.log(subset);
        return;
    }
    let taken = arr[0];
    let left = arr.slice(1);
    generateAllSubsets(left, subset)
    subset.push(taken);
    generateAllSubsets(left, subset);
    subset.pop();
}