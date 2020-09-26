// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Prasanth R',
    job: 'Sr. SQA Engineer',
    img:
      'https://media-exp1.licdn.com/dms/image/C4D03AQGapHHfqvHkIw/profile-displayphoto-shrink_100_100/0?e=1606348800&v=beta&t=aSyDvQEpRdhWFAZbpwjCA7DEmVLVrk22kQCAboDwJ3Q',
    text:
      'Ajay is my colleague in Symantec (now Broadcom) and we have been working together for over an year now. Being senior to him in the work, one thing that I noted immediately in him was his grasping power when we explain things.',
  },
  {
    id: 2,
    name: 'Alexander Lusher',
    job: 'Senior Manager SQA',
    img:
      'https://media-exp1.licdn.com/dms/image/C4E03AQGQ5kG_1O6eQg/profile-displayphoto-shrink_100_100/0?e=1606348800&v=beta&t=P1mAnPt6Pl5lBlDEQTn0Cer4aRdXv4yprgfyrYIMARY',
    text:
      "Ajay is a great Software Engineer. He has been a member of System Integration team which I've managed.This job required him learning and working on great number and variety of components - Windows, Linux, DB.And for all these components he has done fantastic job.",
  },
  {
    id: 3,
    name: 'Ramalingam Chandran',
    job: 'Sr. R&D QA Engineer 4',
    img:
      'https://media-exp1.licdn.com/dms/image/C4E03AQFzKCZIwDxFPA/profile-displayphoto-shrink_100_100/0?e=1606348800&v=beta&t=xF-jhcGkAAQ-qSwTmiKsFzowUZd5FcGKJb7bSbMsQbA',
    text:
      'I worked with Ajay During our public cloud migration time. He joined as a fresher to our team and quickly learned the new technology. He was eager to pick up tasks and finished them on time. He is a quick learner and a good resource to add in any team.',
  },
];

//select items
const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//global var review index (currentItem)
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function () {
  showReview();
});

//when pre,next and surprise me button clicked
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showReview();
});

//next button
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReview();
});

//random button
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showReview();
});

//define function to show review based on item
function showReview() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.text;
}

//
