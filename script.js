const generatePassword = () => {
  const lengthInput = document.getElementById("length").value;
  const length = parseInt(lengthInput);
  if (!lengthInput) {
    alert("Please enter a password length.");
    return;
  }
  if (length < 4 || length > 20) {
    alert("Password length should be more than 4 and less than 20");
    document.getElementById("length").value = "";
    return;
  }
  let upper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let lower = upper.map((x) => x.toLowerCase());
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let symbol = ["!", "@", "#", "$", "%", "^", "&"];

  const uppercase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  let characterPool = [];
  if (uppercase) characterPool = characterPool.concat(upper);
  if (lowercase) characterPool = characterPool.concat(lower);
  if (numbers) characterPool = characterPool.concat(digits);
  if (symbols) characterPool = characterPool.concat(symbol);

  if (characterPool.length === 0) {
    alert("Please select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characterPool[Math.floor(Math.random() * characterPool.length)];
  }
  document.getElementById("password").textContent = password;
};
