var clickCt=0;
document.querySelector("#btn").addEventListener("click",function fnClick(){
    clickCt++;
    document.querySelector("#btn").innerHTML=clickCt;
}
);
