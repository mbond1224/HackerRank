var btns=[]
for(let  i=0;i<=8;i++){
    btns.push(document.querySelector("#btn"+(i+1)));
}
var orders=[4,1,2,7,5,3,8,9,6];
btns[4].addEventListener("click",()=>{
for(var i=0;i<orders.length;i++){
   btns[i].innerHTML=orders[btns[i].innerHTML-1];
}
});
