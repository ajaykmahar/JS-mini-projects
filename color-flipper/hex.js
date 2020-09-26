const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Add Click Event Listern to Button

btn.addEventListener('click', function () {
  //   console.log('You Clicked me!!');
  let hexValue = '#';
  hexValue += getRandomNumbers();
  //   console.log(hexValue);
  setBodyColor(hexValue);
  setColorText(hexValue);
});

//set the background color for body
function setBodyColor(hexcolor) {
  document.body.style.backgroundColor = hexcolor;
}

//set the hex text for backgroun color
function setColorText(hexcolor) {
  color.textContent = hexcolor;
}

function getRandomNumbers() {
  let value = '';
  // get 6 random numbers from hex array
  for (let i = 0; i < 6; i++) {
    // value += Math.floor(Math.random() * hex.length);
    value += hex[Math.floor(Math.random() * hex.length)];
  }
  return value;
}
