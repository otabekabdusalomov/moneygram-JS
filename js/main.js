// PROJECT GENARAL JS CONTST
const elHeading = document.querySelector(".heading")
const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form__input");
const elFormSelect = document.querySelector(".form__select");
const elFormGoal = document.querySelector(".goal");
const elBtn = document.querySelector(".btn");
const elBtnReset = document.querySelector(".btn__reset");


elForm.addEventListener("submit", function(add) {
    add.preventDefault()
    
    elHeading.textContent = "Chorsu valyuta bozor";
    elBtn.textContent = "Amalga oshirildi";
    elBtnReset.textContent = "Takror urinish";
    
    const dollar = 11092.50;
    const euro = 11709.08;
    const rubl = 178.91;
    const tilla = 21000.00;
    const dinor = 24000.09;
    const canada = 11215.00;
    const shvetsariya = 11484.51;
    const funt = 13852.86;
    const yuan = 1657.33;
    
    const inputValue = elFormInput.value;
    const selectorValue = elFormSelect.value;
    
    if (selectorValue == "dollar") {
        elFormGoal.textContent= `${dollar * inputValue} so'm`;
    } else if (selectorValue == "yevro") {
        elFormGoal.textContent= `${euro * inputValue} so'm`;
    } else if (selectorValue == "rubl") {
        elFormGoal.textContent = `${rubl * inputValue} so'm`;
    } else if (selectorValue == "tilla") {
        elFormGoal.textContent = `${tilla * inputValue} so'm`;
    } else if (selectorValue == "dinor") {
        elFormGoal.textContent = `${dinor * inputValue} so'm`;
    } else if (selectorValue == "canada") {
        elFormGoal.textContent = `${canada * inputValue} so'm`;
    } else if (selectorValue == "shvetsariya") {
        elFormGoal.textContent = `${shvetsariya * inputValue} so'm`;
    } else if (selectorValue == "funt") {
        elFormGoal.textContent = `${funt * inputValue} so'm`;
    } else if (selectorValue == "yuan") {
        elFormGoal.textContent = `${yuan * inputValue} so'm`;
    }  
})



elBtnReset.addEventListener("click", function() {
  elHeading.textContent = "Chorsu valyuta bozor";
  elBtn.textContent = "Boshlash";
  elBtnReset.textContent = "Qayta urinish";
})
