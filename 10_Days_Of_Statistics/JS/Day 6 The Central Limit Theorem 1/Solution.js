//Main Code Starts
function processData(input) {
    let[maxweight,samplesize,Null_Hypothesis_mean,std]  = input.split("\n").map(Number);
    let Null_Hypothesis_weight=Null_Hypothesis_mean*samplesize;
    let std_eff=std*Math.sqrt(samplesize);
    let z=(maxweight-Null_Hypothesis_weight)/std_eff;
    let prob=normalcdf(z);
    console.log(prob.toFixed(4));
} 

function normalcdf(X){   
	var T=1/(1+0.2316419*Math.abs(X));
	var D=0.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(0.3193815+T*(-0.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	
	return Prob;
}
//Main Code Ends
let input=`9800
49
205
15`;
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
