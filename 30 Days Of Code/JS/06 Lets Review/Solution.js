function processData(input) {
    let lines=input.split("\n");
    let n=Number(lines[0]);
     let even=[],odd=[];
    for(let j=1;j<=n;j++){
        even=[],odd=[];
        for(let i=0;i<lines[j].length;i++){
        if(i%2)
            odd.push(lines[j].charAt(i));
        else
            even.push(lines[j].charAt(i));
    }
    console.log(""+even.join("")+" "+odd.join(""));
    }
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
