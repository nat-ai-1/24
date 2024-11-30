function generateNumbers() {
  const numbers = [];
  for (let i = 0; i < 4; i++) {
    numbers.push(Math.floor(Math.random() * 9) + 1);
  }
  const numbersDiv = document.getElementById('numbers');
  numbersDiv.textContent = numbers.join(' , ');
}
