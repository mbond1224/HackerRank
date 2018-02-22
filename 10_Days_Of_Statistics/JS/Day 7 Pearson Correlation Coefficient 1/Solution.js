//Main Code Starts
function processData(input) {
    input = input.split("\n");
    let N=Number(input[0]);
    let X=input[1].split(" ").map(Number);
    let Y=input[2].split(" ").map(Number);
  let x2=0,y2=0,Sx=0,Sy=0,xy=0;
   for(let i=0;i<N;i++)
   {
    x2+=X[i]*X[i];
    y2+=Y[i]*Y[i];
    xy+=X[i]*Y[i];
    Sx+=X[i];
    Sy+=Y[i];
     }
     let sdx=Math.sqrt(N*x2-Sx*Sx);
      let sdy=Math.sqrt(N*y2-Sy*Sy);
      let rxy=(N*xy-Sx*Sy)/(sdx*sdy);

      console.log(rxy.toFixed(3));

} 
//Main Code Ends
/*let input=`10
10 9.8 8 7.8 7.7 7 6 5 4 2 
200 44 32 24 22 17 15 12 8 4`;
processData(input);
*/

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

