//Main Code Starts
function processData(input) {
    let lines=input.split("\n");
    let N=Number(lines[0]);
    let arr=lines[1];
    arr=arr.split(" ").map(Number);
    let mean= arr.reduce((a, b) => a + b, 0)/(N*1.0);
    let sqrdDiffSum=0;
    for(let i=0;i<N;i++){
        sqrdDiffSum+=(arr[i]-mean)*(arr[i]-mean);
    }
    let std=Math.sqrt(sqrdDiffSum/(N*1.0))
    console.log(std.toFixed(1));
} 
//Main Code Ends
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
