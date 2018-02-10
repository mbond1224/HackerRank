'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
// Main Code Starts
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
  nums.sort(function(a,b){
      return a-b;
  });
    let largest=nums[nums.length-1];
    let secondlargest=nums[0];
    for(var i=nums.length-2;i>=0;i--){
        if(nums[i]<largest)
        {
            secondlargest=nums[i];
            break ; 
        }
    }
    return secondlargest;
}
//Main Code Ends
function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
