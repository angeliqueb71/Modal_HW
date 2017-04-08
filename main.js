var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName("close")[0];

//model
btn.onclick = function (){
  modal.style.display = "block"
}
//close
span.onclick = function (){
    modal.style.display = "none";
}

window.onclick = function (event){
  if (event.target == modal){
    modal.style.display = "none";
  }
}

function myFunction() {
setInterval(function () {
  alert ("THANK YOU FOR YOUR EMAIL!!"); }, 3000);
}
