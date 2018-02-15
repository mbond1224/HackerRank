function processData(input) {
    let nums=input.split(" ").map(Number)
    let p=nums[0]/(nums[1]+nums[0]);
    let probability=0.0;
    for(let i=3;i<7;i++){
      probability+=b(i, 6,p);
  }
    console.log(probability.toFixed(3));
}
function fact(n){
    let fact=1;
    for(let i=1;i<=n;i++)
        fact*=i;
    return fact;
}
function comb(n, x){
    return fact(n) / (fact(x) * fact(n-x));
}
function b(x, n, p){
    return comb(n, x) * Math.pow(p,x) * Math.pow(1-p,n-x);
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
