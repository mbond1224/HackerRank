//Main Code Starts
function processData(input) {
    input=input.split("\n");
    let Nums=input[0].split(" ").map(Number);
    
    let M=Nums[0];
    let SD=Nums[1];
    let Z=Number(input[1]);
    Nums=input[2].split(" ").map(Number);
    
    let low=Nums[0];
    let high=Nums[1];
    
	let Prob=normalcdf((Z-M)/SD);
	 console.log(Prob.toFixed(3));
    
     Prob=(normalcdf((high-M)/SD)-normalcdf((low-M)/SD));
    
    console.log(Prob.toFixed(3));
}   
function normalcdf(X){   
	var T=1/(1+.2316419*Math.abs(X));
	var D=.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	if (X>0) {
		Prob=1-Prob
	}
	return Prob
}   
// Main Code Ends
const input=`20 2
19.5
20 22`;
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
