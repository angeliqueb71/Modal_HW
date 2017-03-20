document.getElementById("pic")
.addEventListener("mouseover", function(){
alert ("Don't forget to give your email")
})

var modal = document.getElementById('myModal');

var btn = document.getElementById('myBtn');

var span = document.getElementById('close');
btn.onclick = function (){
  modal.style.display = "block"
}

span.onclick = function (){
  if (event.target == modal){
    modal.style.display = "none";
  }
}
window.onclick = function (event){
  if (event.target == modal){
    modal.style.display = "none";
  }
}
