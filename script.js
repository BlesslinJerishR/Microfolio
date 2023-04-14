function qs(ClassorId) {
  return document.querySelector(ClassorId);
}

const menu = document.getElementById('ham-menu');
const ham = document.getElementById('menu');
const form = qs('form');
const name = qs('input[name="name"]');
const email = qs('input[name="email"]');
const txt = qs('textarea[name="text"]');
const error = document.getElementById('error');
const popup = document.getElementById('popup');
const he1 = document.getElementById('popup-content');
const para = document.getElementById('js-p');
const para2 = document.getElementById('js-p2');

function clickMenu() {
  menu.style.display = 'block';
  ham.style.display = 'none';
}
clickMenu('');

function clickX() {
  menu.style.display = 'none';
  ham.style.display = 'block';
}
clickX('');

const img = document.createElement('img');
img.src = '/imgs/popup.png';
popup.appendChild(img);

const heading = 'Keeping track of \n hundreds of \n components';
const h1 = document.createElement('h1');
h1.innerText = heading;
he1.appendChild(h1);

// Skills Badge List  - For popup

const skills = ['Ruby on Rails', 'CSS', 'JS'];
const ul = document.getElementById('badges');
const li = document.createElement('li');
for (let skill = 0; skill <= skills.length; skill += 1) {
  const text = document.createTextNode(skills[skill]);
  li.appendChild(text);
  ul.appendChild(li);
}
li.classList.add('badge');

const lorem = 'Lorem Ipsum is simply dummy text of the \nprinting and typesetting industry. Lorem \nIpsum has been the industry\'s standard \ndummy text ever since the 1500s, when \nan unknown printer took a galley of type \nand scrambled it 1960s.\n';
const p = document.createElement('p');
p.innerText = lorem;
para.appendChild(p);

const lorem2 = 'Lorem Ipsum is simply dummy text of the \nprinting and typesetting industry. Lorem \nIpsum has been the industry\'s standard \ndummy text ever since the 1500s, when \nan unknown printer took a galley of type \nand scrambled it 1960s.\n';
const p2 = document.createElement('p');
p2.innerText = lorem2;
para2.appendChild(p2);

const pops = document.getElementById('pop-outer');

function pop() {
  pops.style.display = 'block';
}
pop('');

function clickPopX() {
  pops.style.display = 'none';
}
clickPopX('');

// Validate Contact Form

form.addEventListener('submit', (event) => {
  const errorMessages = [];
  if (name.value.trim() === '') {
    errorMessages.push('Name is required');
  } else if (email.value.trim() === '') {
    errorMessages.push('Email is required');
  } else if (email.value !== email.value.toLowerCase()) {
    errorMessages.push('Email must be in lowercase');
  } else if (txt.value.trim() === '') {
    errorMessages.push('Message is required');
  }
  if (errorMessages.length > 0) {
    event.preventDefault();
    error.textContent = errorMessages.join('.');
  } else {
    error.textContent = '';
  }
  localStorage.setItem('name', name.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('text', txt.value);
});
