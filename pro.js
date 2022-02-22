
// console.log(document.getElementById("li_links"))
// console.log(document.getElementById("li_links").style.display)

var menue =document.getElementsByClassName("icons")[0];
menue.addEventListener("click",function(){
    var x = document.getElementById("li_links");
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
});


