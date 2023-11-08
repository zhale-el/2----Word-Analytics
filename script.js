const textareaEl = document.querySelector(".textarea");
const charctersNumberEl = document.querySelector(".stat__number--characters");
const wordsNumberEL = document.querySelector(".stat__number--words");
const twitterNumberEL = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");

const inputHandler = () => {
  //determine new numbers
  let numberWords = textareaEl.value.split(" ").length;

  if (textareaEl.value.length === 0) {
    numberWords = 0;
  }

  const numberOfCharcters = textareaEl.value.length;
  const twitterCharctersLeft = 280 - numberOfCharcters;
  const facebookCharctersLeft = 2200 - numberOfCharcters;

  //add visual indicator if limit is exceeded
  if (twitterCharctersLeft < 0) {
    twitterNumberEL.classList.add("stat__number--limit");
  } else {
    twitterNumberEL.classList.remove("stat__number--limit");
  }

  if (facebookCharctersLeft < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }
  //set new numbers
  wordsNumberEL.textContent = numberWords;
  charctersNumberEl.textContent = numberOfCharcters;
  twitterNumberEL.textContent = twitterCharctersLeft;
  facebookNumberEl.textContent = facebookCharctersLeft;
};

textareaEl.addEventListener("input", inputHandler);
