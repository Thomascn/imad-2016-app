console.log('Loaded!');
var element=document.getElementById("main-text") ;
element.innerHTML = "New Value";

var img = document.getElementById("madi");
function moveright(){
    var marginleft=0;
    marginleft=marginleft+10;
    img.style.marginleft = marginleft + 'px';
    }
    
   img.onclick = function() {
       
       var interval = setInterval (moveright, 50);
   } ;