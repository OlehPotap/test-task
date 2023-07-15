// console.log("hi!dfdfd");
const textarea = document.getElementById("textarea");
const form = document.getElementById("form");
const answer = document.getElementById("answer");

// console.log(textarea.value);

function findUniqueChar(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    count[char] = (count[char] || 0) + 1;
  }
  for (let j = 0; j < str.length; j++) {
    const char = str[j];
    if (count[char] === 1) {
      return char;
    }
  }
  return str[1];
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formatedString = textarea.value
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const wordsArr = formatedString.split(" ");
  const resultStr = wordsArr
    .map((el) => {
      return findUniqueChar(el);
    })
    .join("");
  if (resultStr) {
    answer.innerHTML = `This is an answer you are looking for: <span>${findUniqueChar(
      resultStr
    )}</span>`;
  } else {
    answer.innerHTML = `Type something into textfield`;
  }
});
