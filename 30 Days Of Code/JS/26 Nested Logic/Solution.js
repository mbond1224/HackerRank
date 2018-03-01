function processData(input) {
   let [returnedDate,dueDate]=input.split("\n");
    dueDate=dueDate.split(" ").map(Number);
    returnedDate=returnedDate.split(" ").map(Number);
    let fine=0;
    fine=returnedDate[2]<dueDate[2]?0:returnedDate[2]>dueDate[2]?10000:returnedDate[1]>dueDate[1]?(returnedDate[1]-dueDate[1])*500:returnedDate[0]>dueDate[0]?(returnedDate[0]-dueDate[0])*15:0;
    console.log(fine);
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
