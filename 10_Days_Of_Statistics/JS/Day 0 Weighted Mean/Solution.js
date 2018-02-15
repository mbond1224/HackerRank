//Main Code Starts
function processData(input) {
   
    var lines=input.split("\n");
    var N=lines[0];
    var nums=lines[1];
    nums=nums.split(" ");
    var weights=lines[2];
    weights=weights.split(" ");
    
    var weightSum=0,sum=0;
    for(var i=0;i<N;i++){
        sum+=(Number(nums[i]) * Number(weights[i]));
        weightSum+=Number(weights[i]);
    }
    var weightMean=sum/weightSum;
    console.log(weightMean.toFixed(1));
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
