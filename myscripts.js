document.addEventListener('DOMContentLoaded', function(){
window.onscroll = function(){headerControl();};
var header=document.getElementById("header");
var blah=document.getElementById("blah");
var opaque = blah.offsetTop;
function headerControl(){
   if (window.pageYOffset > opaque){
     header.classList.add("opaque");
}
  else{header.classList.remove("opaque");
}
}
});
