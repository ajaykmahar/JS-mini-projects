// select elements
const modalBtn = document.querySelector('.modal-btn');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// console.log(modalBtn);
console.log(overlay);
// console.log(closeBtn);

//add eventListener to open model button

modalBtn.addEventListener('click', function () {
  overlay.classList.add('open-modal');
});

//add eventListener to close model button

closeBtn.addEventListener('click', function () {
  overlay.classList.remove('open-modal');
});
