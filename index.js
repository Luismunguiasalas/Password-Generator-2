const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];

const btnPasswordEl = document.getElementById("btn-password");
let passwordElOne = document.getElementById("password1");
let passwordElTwo = document.getElementById("password2");


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatePassword(length) {
  let password = ''
  for (let i = 0; i <= length; i++) {
    password += characters[getRandomNumber(0, characters.length - 1)]
  }
  return password
}

btnPasswordEl.onclick = () => {
  console.log('click');
  let password1 = generatePassword(25);
  let password2 = generatePassword(25);
  passwordElOne.textContent = password1;
  passwordElTwo.textContent = password2;
}

passwordElOne.onclick = () => {
  navigator.clipboard.writeText(passwordElOne.textContent);
  alert("Copied the text to clipboard: " + passwordElOne.textContent);
}

passwordElTwo.onclick = () => {
  navigator.clipboard.writeText(passwordElTwo.textContent);
  alert("Copied the text to clipboard: " + passwordElTwo.textContent);
}
