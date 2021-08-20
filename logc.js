function value(){
    var r=gst();
    if(r>0 && r<100)
    return r/100;
    else
    return 0.03; 
}
function fn(){
 var num=document.getElementById("amount").value;
 
 var g=value();
 
 var gst=num-g*num;
 var newNum =gst+g*gst;
 var diff=num-newNum;
 gst+=diff;
 
 document.getElementById("result").innerHTML=gst;
 var p=document.getElementById("amount");
 p.value="";
}
function gst(){
    var g=document.getElementById("gst").value;
    return g;
}
function d(){
    var d=document.getElementById("d").value;
    var dr=document.getElementById("dr").value;
    var car=d/dr;
    document.getElementById("dc").innerHTML=car;
    d.placeholder="";
    dr.placeholder="";
}