function processData(input) {
   let[n,...Nums]=input.split("\n").map(Number);
  for(let i=0;i<n;i++){
      console.log(primeTest(Nums[i]));
  }
} 
function primeTest(num){
    let lim=Math.ceil(Math.sqrt(num+1));
    lim=lim>num?num:lim;
    if(num===1 || (num>2 && num%2===0))
        return "Not prime";
    for(let i=3;i<lim;i+=2)
     if (num%i===0)
         return "Not prime";
    
    return "Prime";
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
