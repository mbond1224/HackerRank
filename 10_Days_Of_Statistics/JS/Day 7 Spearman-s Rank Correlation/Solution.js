//Main Code Starts
function processData(input) {
    input = input.split("\n");
    let N = Number(input[0]);
    let X = input[1].split(" ").map(Number);
    let Y = input[2].split(" ").map(Number);
    X = getRankArray(X);
    Y = getRankArray(Y);
    let Sd2 = 0,d=0;
    for (let i = 0; i < N; i++) {
        d = X[i] - Y[i];
        Sd2 += d * d;
    }

    let rxy = 1 - 6 * Sd2 / (N * (N * N - 1));

    console.log(rxy.toFixed(3));

}

function getRankArray(arrNumber) {
    let n = arrNumber.length;
    let Result = [];
    let rank;
    for (let i = 0; i < n; i++) {
        rank = arrNumber.filter(j => j > arrNumber[i]).length + 1;
        Result.push(rank);
    }
    //console.log(Result);
    return Result;
}
//Main Code Ends
/*let input = `10
10 9.8 8 7.8 7.7 1.7 6 5 1.4 2 
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
