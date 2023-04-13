const menu = document.getElementById("ham-menu");
const ham = document.getElementById("menu");

function clickMenu() {
  menu.style.display = "block";
  ham.style.display = "none";
}
clickMenu("");

function clickX() {
  menu.style.display = "none";
  ham.style.display = "block";
}
clickX("");

const popup = document.getElementById("popup");
let img = document.createElement("img");
img.src = "/imgs/popup.png";
popup.appendChild(img);

let he1 = document.getElementById("popup-content");
let heading = "Keeping track of \n hundreds of \n components";
let h1 = document.createElement("h1");
h1.innerText = heading;
he1.appendChild(h1);

var ul = document.getElementById("badges");
let skills = ["Ruby on Rails", "CSS", "JS"];
for (let skill of skills) {
  var li = document.createElement("li");
  var text = document.createTextNode(skill);
  li.appendChild(text);
  ul.appendChild(li);
}
li.classList.add("badge");

let para = document.getElementById("js-p");
let lorem =
  "Lorem Ipsum is simply dummy text of the \nprinting and typesetting industry. Lorem \nIpsum has been the industry's standard \ndummy text ever since the 1500s, when \nan unknown printer took a galley of type \nand scrambled it 1960s.\n";
let p = document.createElement("p");
p.innerText = lorem;
para.appendChild(p);

let para2 = document.getElementById("js-p2");
let lorem2 =
  "Lorem Ipsum is simply dummy text of the \nprinting and typesetting industry. Lorem \nIpsum has been the industry's standard \ndummy text ever since the 1500s, when \nan unknown printer took a galley of type \nand scrambled it 1960s.\n";
let p2 = document.createElement("p");
p2.innerText = lorem2;
para2.appendChild(p2);

let pops = document.getElementById("pop-outer");

function pop() {
  pops.style.display = "block";
}

function clickPopX() {
  pops.style.display = "none";
}

// Validate Contact Form

function qs(ClassorId) {
  return document.querySelector(ClassorId);
}
const form = qs('form');
const name = qs('input[name="name"]');
const email = qs('input[name="email"]');
const txt = qs('textarea[name="text"]');

form.addEventListener('submit', (event) => {
  const errorMessages = [];
  if (name.value.trim() === '') {
    errorMessages.push('Name is required');
  } else if (email.value.trim() === '') {
    errorMessages.push('Email is required');
  } else if (txt.value.trim() === '') {
    errorMessages.push('Message is required');
  } else if (email.value !== email.value.toLowerCase()) {
    errorMessages.push('Email must be in lowercase');
  }

  localStorage.setItem('name', name.value );
  localStorage.setItem('email', email.value );
  localStorage.setItem('text', txt.value );

  if (errorMessages.length > 0) {
    event.preventDefault();
    error.textContent = errorMessages.join('.');
  } else {
    error.textContent = '';
  }
});
