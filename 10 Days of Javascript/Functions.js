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
/* Main Code Starts
 * Create the function factorial here
 */
function factorial(num){
   let fact=1;
    for(var i=1;i<=num;i++)
        fact*=i;
    return fact;
}
/** Main Code Ends **/

function main() {
  const n = +(readLine());
    console.log(factorial(n));
}
