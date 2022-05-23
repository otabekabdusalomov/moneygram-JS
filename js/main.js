const elHeading = document.querySelector(".heading")
const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form__input");
const elFormSelect = document.querySelector(".form__select");
const elFormGoal = document.querySelector(".goal");
const elBtn = document.querySelector(".btn");
const elBtnReset = document.querySelector(".btn__reset");


elForm.addEventListener("submit", function(evt) {
  evt.preventDefault()

  elHeading.textContent = "Summangizni ko'rishingiz mumkin!";
  elBtn.textContent = "Tugadi";
  elBtnReset.textContent = "Qaytadan kiritish";

  const dollar = 11092.50;
  const euro = 11709.08;
  const rubl = 178.91;
  const funt = 13852.86;
  const yuan = 1657.33;

  const inputValue = elFormInput.value;
  const selectorValue = elFormSelect.value;

  if (selectorValue == "dollar") {
    elFormGoal.textContent= `${dollar * inputValue} so'm'`;
  } else if (selectorValue == "yevro") {
    elFormGoal.textContent= `${euro * inputValue} so'm'`;
  } else if (selectorValue == "rubl") {
    elFormGoal.textContent = `${rubl * inputValue} so'm'`;
  } else if (selectorValue == "funt") {
    elFormGoal.textContent = `${funt * inputValue} so'm`;
  } else if (selectorValue == "yuan") {
    elFormGoal.textContent = `${yuan * inputValue} so'm`;
  }

})

elBtnReset.addEventListener("click", function() {
  elHeading.textContent = "MONEYGRAM";
  elBtn.textContent = "BOSHLASH";
  elBtnReset.textContent = ".....";
  elFormResult.textContent = "SUMMA"
})
