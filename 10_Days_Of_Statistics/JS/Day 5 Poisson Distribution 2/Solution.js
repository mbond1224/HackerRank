// Main Code Starts
function processData(input) {
  let Nums=input.split(" ").map(Number);
 
   let cost1=160+40*Nums[0]*(Nums[0]+1);
   let cost2=128+40*Nums[1]*(Nums[1]+1);
    
  console.log(cost1.toFixed(3));
  console.log(cost2.toFixed(3));
     
} 
//Main Code Ends
const input=`0.88 1.55`;
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
