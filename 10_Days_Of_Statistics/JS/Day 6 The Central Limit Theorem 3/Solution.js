//Main Code Starts
function processData(input) {
    let[samplesize,mean,std,conf_interval,z_statistics]  = input.split("\n").map(Number);
    let std_eff=std/Math.sqrt(samplesize);
    let lower_end=mean-z_statistics*std_eff;
    let upper_end=mean+z_statistics*std_eff;
    console.log(lower_end.toFixed(2));
    console.log(upper_end.toFixed(2));
} 
//Main Code Ends
let input=`100
500
80
.95
1.96`;
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
});
*/
