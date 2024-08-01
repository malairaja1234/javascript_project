
function cal()
{
let n1=Number(document.getElementById("val1").value);
let n2=Number(document.getElementById("val2").value);
let n3=document.getElementById("val3").value;
let res=document.getElementById("resul");
let re=0;
if(n3=="add")
{
re=n1+n2;
}
else if(n3=="sub")
{
    re=n1-n2;
}
else if(n3=="mul")
{
    re=n1*n2;
}
else if(n3=="div")
{
    re=n1/n2;
}

res.innerText=re;

}