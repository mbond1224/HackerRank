function processData(input) {
    //Enter your code here
    var lines = input.split("\n");
    var N = +lines[0];
    var array = lines[1];
     array = array.split(" ");
    var sum=0;
    for(var i=0;i<N;i++){
        sum+=Number(array[i]);
        }
    var mean= sum/N;
    console.log(mean);
    //sort the array
    array=array.sort(function(first,second){
        return first-second;
    })
    
    var middle= Math.floor(N/2);
    if(N%2===1){
        median = Number(array[middle]);
    }else {
        median = (Number(array[middle-1]) + Number(array[middle]))/2;
    }
    console.log(median);
    
    var getmode = function mode(numarray){
        var numFrequenies={}
        var max=0;
        var modeNum;
        numarray.forEach(function findMode(number){
             numFrequenies[number] = (numFrequenies[number] || 0) + 1;

        if (max < numFrequenies[number]) {
            max = numFrequenies[number];
            modeNum = number;
        }
        });
        return +modeNum;
    }
    
    console.log(getmode(array));
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
