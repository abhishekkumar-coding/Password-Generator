let abc = "abcdefghijklmnopqrstuvwxyz";
let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let digits = "0123456789";
let symbols = "!@#$%^&*()_+=-/.,|}{[]~`<>?;:'\"\\";
let extraSymbols = "€£¥§©®™✓★☆✓✗✓✪";

function generatePassword(length) {
  let allCharacters = abc + ABC + digits + symbols + extraSymbols;
  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}
function handleGeneratePassword() {
  let passwordLength = 12; // You can change the length as needed
  let randomPassword = generatePassword(passwordLength);
  console.log(randomPassword);

  // Accessing Dom

  const p = document.querySelector("P");
  console.log(p);

  p.innerText = randomPassword;
}

document.getElementById("copyIcon").addEventListener("click", function () {
  const psdBox = document.querySelector("P").innerText;
  if (psdBox) {
    navigator.clipboard
      .writeText(psdBox)
      .then(() => {
        alert("Password copied to the clipboard.");
      })
      .catch((err) => {
        console.log("This error is occuring   " + err);
      });
  } else {
    alert("No password to copy!");
  }
});
