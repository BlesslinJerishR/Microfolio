const menu = document.getElementById('ham-menu');
const ham = document.getElementById('menu');

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

const popup = document.getElementById('popup');
const img = document.createElement('img');
img.src = '/imgs/popup.png';
popup.appendChild(img);

const he1 = document.getElementById('popup-content');
const heading = 'Keeping track of \n hundreds of \n components';
const h1 = document.createElement('h1');
h1.innerText = heading;
he1.appendChild(h1);

const para = document.getElementById('js-p');
const lorem = 'Lorem Ipsum is simply dummy text of the \nprinting and typesetting industry. Lorem \nIpsum has been the industry\'s standard \ndummy text ever since the 1500s, when \nan unknown printer took a galley of type \nand scrambled it 1960s.\n';
const p = document.createElement('p');
p.innerText = lorem;
para.appendChild(p);

const para2 = document.getElementById('js-p2');
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

function qs(ClassorId) {
  return document.querySelector(ClassorId);
}
const form = qs('form');
const name = qs('input[name="name"]');
const email = qs('input[name="email"]');
const txt = qs('textarea[name="text"]');
const error = document.getElementById('error');

// Local Storage - Retaining saved form

let inputData = {};
if (localStorage.savedForm) {
  inputData = JSON.parse(localStorage.getItem('savedForm'));
}

name.addEventListener('change', () => {
  inputData.name = name.value;
});

email.addEventListener('change', () => {
  inputData.email = email.value;
});

txt.addEventListener('change', () => {
  inputData.txt = txt.value;
});

const fillDataInput = () => {
  if (inputData.name) {
    name.value = inputData.name;
  }
  if (inputData.email) {
    email.value = inputData.email;
  }
  if (inputData.txt) {
    txt.value = inputData.txt;
  }
};

const populateFields = () => {
  localStorage.setItem('savedForm', JSON.stringify(inputData));
  fillDataInput();
};
populateFields();
form.onchange = populateFields;

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
  if (errorMessages.length > 0) {
    event.preventDefault();
    error.textContent = errorMessages.join('.');
  } else {
    error.textContent = '';
  }
});
