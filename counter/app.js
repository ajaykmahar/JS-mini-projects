// set up count value
let count = 0;

// Select span counter and button
const counter = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
// console.log(btns);

//add eventListener to all buttons

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // console.log(e.currentTarget);
    const cls = e.currentTarget.classList;

    // console.log(cls);
    cls.contains('decrease')
      ? count--
      : cls.contains('increase')
      ? count++
      : (count = 0);
    // if (cls.contains('decrease')) {
    //   count--;
    // } else if (cls.contains('increase')) {
    //   count++;
    // } else {
    //   count = 0;
    // }

    counter.style.color = count < 0 ? 'red' : count > 0 ? 'green' : 'black';
    // if (count < 0) {
    //   counter.style.color = 'red';
    // } else if (count > 0) {
    //   counter.style.color = 'green';
    // } else {
    //   counter.style.color = 'black';
    // }
    counter.textContent = count;
  });
});
