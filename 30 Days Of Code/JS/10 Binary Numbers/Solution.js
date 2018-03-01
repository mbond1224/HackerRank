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
    var n = parseInt(readLine());
    let binrep=n.toString(2).split("");
    let ct=0,maxCt=0;
    for(let i=0;i<binrep.length;i++){
        if("1"===binrep[i])
       {     ct++; 
         maxCt=ct>maxCt?ct:maxCt;
       }
    else
        ct= 0;
    }
    console.log(maxCt);

}
