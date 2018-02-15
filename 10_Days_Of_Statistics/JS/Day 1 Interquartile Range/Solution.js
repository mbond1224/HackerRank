//Main Code Starts
function processData(input) {
    let lines=input.split("\n");
    let N=Number(lines[0]);
    let NUMS=lines[1];
    NUMS=NUMS.split(" ").map(Number);
    let freq=lines[2];
    freq=freq.split(" ").map(Number);
    let arr=[]
    for(let i=0;i<N;i++)
    {
    for(let j=0;j<freq[i];j++)
        arr.push(NUMS[i]);
       }
    arr.sort(function(a,b){
        return a-b;
    });
    N=arr.length;
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
    console.log((Q3-Q1).toFixed(1));
    
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
