

function show(){
  var x=document.getElementById("formfilling");
  x.style.display="Block";
}
function hide(){
  var x=document.getElementById("formfilling");
  x.style.display="None";
}
function cross(e){
 e.parentNode.parentNode.removeChild(e.parentNode);
}
function generatewidget(){
  var color=['black','red','blue','green','yellow','orange','purple','pink','brown','grey'];
  var str="";
  var y=document.getElementById("dashboard");
  var w=document.createElement("div");
  w.className="widget";
  var u=document.createElement("button")
  u.innerText="❌";
  u.className="cross";
  w.appendChild(u);
  w.getElementsByTagName("button")[0].setAttribute("onclick","cross(this)");
  u=document.createElement("div");
  u.setAttribute("id","left");
  w.appendChild(u);
  u=document.createElement("div");
  u.setAttribute("id","right");
  w.appendChild(u);
  var z=document.getElementsByTagName("li");
  for(var i=0;i<z.length;i++){
    var a=z[i].querySelector("input[name='qname']").value;
    var b=z[i].querySelector("input[name='quantity']").value;
    if(a!="" && b!=""){
        var t=document.createElement("p");
        var qq=document.createElement("span")
        qq.style.backgroundColor=color[i];
        qq.style.height="10px";
        qq.style.width="10px";
        t.innerText=a+"    ";
        t.appendChild(qq);
        w.querySelector("#right").appendChild(t);
    }
  }
  var x=document.getElementById("formfilling");
  x.style.display="None";
  u=document.createElement("div");
  u.setAttribute("id","ocircle");
  var arr=[],j=0,sum=0,prev=0;
  for(var i=0;i<z.length;i++){
    var b=z[i].querySelector("input[name='quantity']").value;
    if(a!="" && b!=""){
        arr[j]=Number(b);
        sum=sum+arr[j];
        j++;
    }
    z[i].querySelector("input[name='qname']").value="";
    z[i].querySelector("input[name='quantity']").value="";
  }
  for(var o=0;o<j;o++){
      str=str+color[o]+" 0 "+(prev+(360*(arr[o]/sum)))+"deg, ";
      prev=prev+(360*(arr[o]/sum));
  }
  str=str.slice(0,-2);
  u.style.backgroundImage = "conic-gradient("+str+")";
  w.querySelector("#left").appendChild(u);
  u=document.createElement("div");
  u.setAttribute("id","icircle");
  w.querySelector("#left").appendChild(u);
  y.appendChild(w);

}
function addrow(){
  var x=document.querySelector("ol");
  var h=document.createElement("li");
  h.innerHTML='<input name="qname"/><input name="quantity"/>';
  x.appendChild(h);
}
function removerow(){
  var i;
  y=document.querySelector("ol");
  var x=document.querySelectorAll("li");
  for(i=0;i<x.length;i++){
    if(x.length==1){
      alert("You can't remove all the rows");
      return;
    }
  }
  i--;
  y.removeChild(x[i]);
}