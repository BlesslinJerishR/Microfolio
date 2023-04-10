const menu = document.getElementById("ham-menu");
const ham = document.getElementById("menu");
let num = 0;
function clickMenu() {
  console.log("I am clicked");
  menu.style.display = "block";
  ham.style.display = "none";
}

function clickX() {
  console.log("I am X");
  menu.style.display = "none";
  ham.style.display = "block";
}
