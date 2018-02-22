
// Main Code Starts
function processData(input) {
    let lines=input.split("\n");
    let probs=lines[0].split(" ").map(Number);
    let p=probs[0]/probs[1];
    let k=Number(lines[1]);
    let probability= Math.pow(1-p,k - 1) * p;
    console.log(probability.toFixed(3));
} 
// Main Code ends
const input=`1 3
5`;
processData(input);
/*
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
}); */
