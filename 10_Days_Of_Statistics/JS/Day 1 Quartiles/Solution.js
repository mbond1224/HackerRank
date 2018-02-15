//Main Code Starts
function processData(input) {
    let lines=input.split("\n");
    let N=Number(lines[0]);
    let arr=lines[1];
    arr=arr.split(" ").map(Number);
    arr.sort(function(a,b){
        return a-b;
    });
    let Q2=getMedian(arr,0,N-1);
    let Q1=0,Q3=0;
    let mid=Math.floor(N/2);
    if(N%2===0){
        Q1 = getMedian(arr, 0, mid-1);
        Q3 = getMedian(arr, mid, N - 1);
    }
    else{
        Q1 = getMedian(arr, 0, mid-1);
        Q3 = getMedian(arr, mid+1, N - 1);
    }
    console.log(Q1);
    console.log(Q2);
    console.log(Q3);
} 
function getMedian(arr,start,end) 
{
    let ct=end-start+1;
    let middle=Math.floor((start+end+1)/2);
    if(ct%2===0){
        return +(arr[middle]+arr[middle-1])/2;
    }
    else{
        return +arr[middle];
    }
}
//Main Code Ends
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
