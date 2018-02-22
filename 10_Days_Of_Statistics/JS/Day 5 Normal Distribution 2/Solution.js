//Main Code Starts
function processData(input) {
    input = input.split("\n");
    let[mean,SD]=input[0].split(" ").map(Number);
    let range1=Number(input[1]);
    let range2=Number(input[2]);
    let Prob=normalcdf((range1-mean)/SD)*100;
    console.log(Prob.toFixed(2));
     Prob=normalcdf((range2-mean)/SD)*100;
    console.log((100-Prob).toFixed(2));
    console.log(Prob.toFixed(2));
} 
function normalcdf(X){   
	var T=1/(1+0.2316419*Math.abs(X));
	var D=0.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(0.3193815+T*(-0.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	return Prob;
}
//Main Code Ends
let input=`70 10
80
60`;
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
});*/
