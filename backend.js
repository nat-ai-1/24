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

function checkAnswer() {
  const userInput = document.getElementById('user-input').value;
  try {
    
    let result = eval(userInput);
    if (Math.abs(result - target) < 0.01) {
      document.getElementById('message').textContent = 'ถูกต้อง! ยินดีด้วย!';
      document.getElementById('message').style.color = 'green';
    } else {
      document.getElementById('message').textContent = 'ลองใหม่อีกครั้ง!';
      document.getElementById('message').style.color = 'red';
    }
  } catch (e) {
    document.getElementById('message').textContent = 'กรุณากรอกคำตอบที่ถูกต้อง!';
    document.getElementById('message').style.color = 'red';
  }
}


generateNumbers();
