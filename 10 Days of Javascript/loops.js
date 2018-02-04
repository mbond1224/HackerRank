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
//Main Code Starts

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let stlen=s.length;
    // print vowels
    for(var i=0;i<stlen;i++){
        if(ifVowel(s[i]))
            console.log(s[i]);
    }
    // print non vowels
    for(var i=0;i<stlen;i++){
        if(!ifVowel(s[i]))
            console.log(s[i]);
    }
}
function ifVowel(c)
{
    return (c==='a'||c==='e'||c==='i'||c==='o'||c==='u');
}

// Main Code Ends

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
