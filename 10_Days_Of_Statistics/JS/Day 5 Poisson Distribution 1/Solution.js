//Main Code Starts
function processData(input) {
    Nums=input.split("\n").map(Number);
    console.log(Poisson(Nums[1],Nums[0]).toFixed(3));
   } 
 function Poisson(k, lam){
    return (Math.pow(lam,k) * Math.exp(-lam))/(fact(k));
 }
function fact(n){
    let fact=1;
    for(let i=1;i<=n;i++)
        fact*=i;
    return fact;
}
//Main Code Ends
const input=`2.5
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
});
*/
