window.onscroll = function(){headerControl()}
var header=document.getElementById("header");
var blah=document.getElementById("blah");
var opaque = blah.offsetTop
function headerControl(){
   if (window.pageYOffset > opaque){
     header.classList.add("opaque");
}
  else{header.classList.remove("opaque")
}
}
function sendMail(){
  var link = "mailto:gnomatix.music@gmail.com"
+"?cc="+ encodeURIComponent(document.getElementById("email").value)
+"&subject=" + encodeURIComponent(document.getElementById("subject").value)
+"&body=" + encodeURIComponent(document.getElementById("body").value)
  window.location.href = link}
