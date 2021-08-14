function show(relevant, others) {
  let prvek = document.getElementById(relevant);
  prvek.style.display = "block";
  others.forEach(id => hide(id));
}

function hide(id){
  let prvek = document.getElementById(id);
  prvek.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(){
  let birth = new Date("12/15/1998");
  let today = new Date();
  let seconds = today.getTime() - birth.getTime();
  let days = seconds / (24*60*60*1000);
  let prvek = document.getElementById("days");
  prvek.textContent = Math.round(days);
})
