let numbers = [];
let target = 24;

function generateNumbers() {
 
  numbers = [];
  for (let i = 0; i < 4; i++) {
    numbers.push(Math.floor(Math.random() * 9) + 1);
  }

  
  document.getElementById('num1').textContent = numbers[0];
  document.getElementById('num2').textContent = numbers[1];
  document.getElementById('num3').textContent = numbers[2];
  document.getElementById('num4').textContent = numbers[3];

  
  document.getElementById('message').textContent = '';
  document.getElementById('user-input').value = '';
}

  

generateNumbers();
