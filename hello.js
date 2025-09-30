function search(){
  var d;
  var a=document.querySelectorAll("#right");
  var b=document.querySelector("#keywords").value;
  for(var c=0;c<a.length;c++){
    d=a[c].querySelector("p");
    if(d.innerText.toLowerCase().includes(b.toLowerCase())){
      a[c].scrollIntoView({
        behavior: 'smooth', // Smooth scrolling animation
        block: 'center',    // Align the element to the center of the viewport
        inline: 'nearest'   // Horizontal alignment (if applicable)
      });
    }
  }
  console.log(a);
}
var input=document.getElementById("keywords");
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
});
function show(){
  document.getElementById("shadow").style.opacity="0.5";
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
  var z=document.getElementsByTagName("li");
  document.getElementById("shadow").style.opacity="1";
  for(var i=0;i<z.length;i++){
    var a=z[i].querySelector("input[name='qname']").value;
    var b=z[i].querySelector("input[name='quantity']").value;
    if(a=="" || b=="" || isNaN(b) || Number(b)<=0){
        return;
    }
  }
  var color=[['lightblue','red','blue','green','yellow','orange','purple','pink','brown','grey'],
             ['#FFB6C1','#FF4500','#1E90FF','#32CD32','#FFD700','#FF8C00','#800080','#FF69B4','#A52A2A','#808080'],
             ['#E0FFFF','#DC143C','#0000CD','#228B22','#FFFF00','#FFA500','#4B0082','#FF1493','#8B4513','#A9A9A9'],
             ['#AFEEEE','#B22222','#00008B','#006400','#FFFFE0','#FF7F50','#9400D3','#FF00FF','#D2691E','#696969'],
             ['#40E0D0','#8B0000','#000080','#2E8B57','#FFFACD','#FF6347','#8A2BE2','#C71585','#A0522D','#585858'],
             ['#48D1CC','#A52A2A','#191970','#3CB371','#FAFAD2','#FF4500','#9932CC','#DB7093','#CD853F','#404040'],
             ['#20B2AA','#800000','#0000CD','#66CDAA','#FFFFF0','#FF8C00','#BA55D3','#FF69B4','#D2B48C','#303030'],
             ['#008B8B','#B22222','#0000FF','#20B2AA','#FFFFE0','#FF7F50','#8A2BE2','#FF1493','#A0522D','#202020'],
             ['#00CED1','#FF0000','#4169E1','#3CB371','#FFFACD','#FF6347','#9370DB','#FF00FF','#D2691E','#101010']];
  var str="";
  var arr=[],j=0,sum=0,prev=0,random=0;
  random=Math.floor(Math.random()*9);
  var y=document.getElementById("dashboard");
  var w=document.createElement("div");
  w.className="widget";
  var u=document.createElement("button")
  u.innerText="x";
  u.className="cross";
  w.appendChild(u);
  w.getElementsByTagName("button")[0].setAttribute("onclick","cross(this)");
  u=document.createElement("div");
  u.setAttribute("id","left");
  w.appendChild(u);
  u=document.createElement("div");
  u.setAttribute("id","right");
  w.appendChild(u);
  z=document.getElementsByTagName("li");
  for(var i=0;i<z.length;i++){
    var a=z[i].querySelector("input[name='qname']").value;
    var b=z[i].querySelector("input[name='quantity']").value;
    var t=document.createElement("p");
    var qq=document.createElement("span")
    qq.style.backgroundColor=color[random][i];
    t.innerText="  "+a+"("+b+")";
    t.prepend(qq);
    w.querySelector("#right").appendChild(t);
    arr[i]=Number(b);
    sum=sum+arr[i];
    document.querySelectorAll("input[name='qname']")[i].value="";
    document.querySelectorAll("input[name='quantity']")[i].value="";
  }
  var x=document.getElementById("formfilling");
  x.style.display="None";
  u=document.createElement("div");
  u.setAttribute("id","ocircle");
  for(var o=0;o<i;o++){
      str=str+color[random][o]+" 0 "+(prev+(360*(arr[o]/sum)))+"deg, ";
      prev=prev+(360*(arr[o]/sum));
  }
  str=str.slice(0,-2);
  u.style.backgroundImage = "conic-gradient("+str+")";
  w.querySelector("#left").appendChild(u);
  u=document.createElement("div");
  u.setAttribute("id","icircle");
  z=document.createElement("div");
  z.setAttribute("id","icircle_sum")
  z.innerText=sum;
  z.style.fontWeight="bold";
  u.appendChild(z);
  z=document.createElement("div");
  z.setAttribute("id","icircle_total")
  z.innerText="Total"
  z.style.fontWeight="bold";
  u.appendChild(z);
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