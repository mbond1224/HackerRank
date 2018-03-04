process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
    findmax(n,k);
    }

}
function findmax(n,k)
{
    let max=0,tmax=0;
    for(let b=1;b<=n;b++){
        for(let a=0;a<b;a++){
            tmax=a&b;
            if(tmax>max && tmax<k)
                max=tmax;
        }
    }
    console.log(max);
}
