// Error 1
const menu = document.getElementById('ham-menu');
const ham = document.getElementById('menu');
// Error 2
function clickMenu() {
  menu.style.display = 'block';
  ham.style.display = 'none';
}
clickMenu('');
// Error 3
function clickX() {
  menu.style.display = 'none';
  ham.style.display = 'block';
}
clickX('');

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

// Pop Up

const projectData = [
  {
    imgPopDes: 'imgs/Snapshoot-Portfolio.svg',
    imgPopMob: 'imgs/popup.png',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby', 'CSS', 'Javascript'],
  },
  {
    imgPopDes: 'imgs/Snapshoot-Portfolio.svg',
    imgPopMob: 'imgs/popup.png',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby', 'CSS', 'Javascript'],
  },
  {
    imgPopDes: 'imgs/Snapshoot-Portfolio.svg',
    imgPopMob: 'imgs/popup.png',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby', 'CSS', 'Javascript'],
  },
  {
    imgPopDes: 'imgs/Snapshoot-Portfolio.svg',
    imgPopMob: 'imgs/popup.png',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby', 'CSS', 'Javascript'],
  },
  {
    imgPopDes: 'imgs/Snapshoot-Portfolio.svg',
    imgPopMob: 'imgs/popup.png',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby', 'CSS', 'Javascript'],
  },
  {
    imgPopDes: 'imgs/Snapshoot-Portfolio.svg',
    imgPopMob: 'imgs/popup.png',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby', 'CSS', 'Javascript'],

  },
];

const projectPage = document.querySelector('#page');
for (let i = 0; i < projectData.length; i += 1) {
  projectPage.innerHTML += `
    <section class="s-card">
      <div id="card">
        <div class="card1">
          <h3>${projectData[i].head} <br />${projectData[i].head2}</h3>
          <ul class="li">
            &nbsp;&nbsp;&nbsp;
            <li class="li-bg">${projectData[i].tags[0]}</li>
            &nbsp;&nbsp;&nbsp;
            <li class="li-bg">${projectData[i].tags[1]}</li>
            &nbsp;&nbsp;&nbsp;
            <li class="li-bg">${projectData[i].tags[2]}</li>
            &nbsp;&nbsp;&nbsp;
            <li class="li-bg">${projectData[i].tags[3]}</li>
            &nbsp;&nbsp;&nbsp;
          </ul>
          <button class="btn btn-see" id="btn-${i}">
              See project
          </button>
        </div>
      </div>
    </section>
  `;
}

// Bheki - Code Model Js

      // Close Button Logic
      const close = document.querySelector('.close-btn');
      close.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
      });
    });
  });
}
