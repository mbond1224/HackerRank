//Main Code Starts
function processData(input) {
    const x=80;
    input = input.split("\n");
    let N=input.length;
    let X=[];
    let Y=[];

   for(let i=0;i<N;i++){
       [X[i],Y[i]]=input[i].split(" ").map(Number);
   }
    let [a,b]=fitLinearRegression(X,Y,N);
    let y=a+b*x;
    console.log(y.toFixed(3));
     

} 

function fitLinearRegression(X,Y,N){
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
     let b=rxy*sdy/sdx;
     let a=Sy/N-b*Sx/N;
     return [a,b];
}
//Main Code Ends
let input=`95 85
85 95
80 70
70 65
60 70`;
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
