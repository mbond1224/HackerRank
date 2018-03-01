function processData(input) {
    input=input.split("\n");
    let n=Number(input[0]);
    let phonebook={};
    let pair;
    for(let i=1;i<=n;i++){
       pair=input[i].split(" ");
        phonebook[pair[0]]=pair[1];
    }
    let response;
    for(let i=n+1;i<input.length;i++){
       if(phonebook[input[i]])
       console.log(""+input[i]+"="+phonebook[input[i]]);
        else
            console.log("Not found");
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
