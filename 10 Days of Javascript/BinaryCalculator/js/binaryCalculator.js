var inpRes=document.querySelector("#res");
var btn0=document.querySelector("#btn0");
var btn1=document.querySelector("#btn1");
var btnClr=document.querySelector("#btnClr");
var btnEql=document.querySelector("#btnEql");

var btnSum=document.querySelector("#btnSum");
var btnSub=document.querySelector("#btnSub");
var btnMul=document.querySelector("#btnMul");
var btnDiv=document.querySelector("#btnDiv");

var currentop="";

btnClr.addEventListener("click",()=>setOP(""));
btn0.addEventListener("click",()=>setOP("0"));
btn1.addEventListener("click",()=>setOP("1"));

btnSum.addEventListener("click",()=>setOP("+",true));
btnSub.addEventListener("click",()=>setOP("-",true));
btnMul.addEventListener("click",()=>setOP("*",true));
btnDiv.addEventListener("click",()=>setOP("/",true));

btnEql.addEventListener("click",()=>inpRes.innerHTML=parseExp(inpRes.innerHTML));

function parseExp(stExp){
    let nums=stExp.split(currentop);
    if(nums.length==2)
    {
    let op1=parseInt(nums[0],2);
    let op2=parseInt(nums[1],2);
   
    switch(currentop){
       case "+":return (op1+op2).toString(2);
       case "-":return (op1-op2).toString(2);
       case "*":return (op1*op2).toString(2);
       case "/":return (op1/op2).toString(2);
    }
}
return stExp;
}
function setOP(stOP,op){
    if (stOP==="")
    inpRes.innerHTML="";
    else
    inpRes.innerHTML=inpRes.innerHTML+stOP;
    if(op)    currentop=stOP;
}
