const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

//target button
const btn = document.getElementById('btn');
//target color
const color = document.querySelector('.color');

//add eventListener to Button

btn.addEventListener('click', function () {
  //get the random numbers
  const randomNumber = getRandomNumbers();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

//function to get random numbers
function getRandomNumbers() {
  return Math.floor(Math.random() * colors.length);
}
