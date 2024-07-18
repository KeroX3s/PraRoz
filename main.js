const inputSearch = document.querySelector(".right-header input");
const paraSearch = document.querySelector(".right-header p");

inputSearch.addEventListener("focus", function () {
  paraSearch.style.display = "none";
  inputSearch.style.opacity = "1";
});
inputSearch.addEventListener("blur", function () {
  paraSearch.style.display = "block";
  if (inputSearch.value) {
    paraSearch.style.display = "none";
    inputSearch.style.opacity = "1";
  } else {
    inputSearch.style.opacity = ".3";
  }
});

const logo = document.querySelector(".logo");
const link = document.querySelector(".center-header a");

logo.addEventListener("click", () => link.click());

const nameInputLabel = document.querySelector(".l-name");
const InputValid = document.querySelector(".inputN");

console.log(InputValid);
console.log(nameInputLabel);

InputValid.addEventListener("blur", function () {
  if (InputValid.value) {
    nameInputLabel.style.display = "none";
  } else {
    nameInputLabel.style.display = "block";
  }
});

const nameInputLabel2 = document.querySelector(".l-name2");
const InputValid2 = document.querySelector(".inputN2");

console.log(nameInputLabel2);

InputValid2.addEventListener("blur", function () {
  if (InputValid2.value) {
    nameInputLabel2.style.display = "none";
  } else {
    nameInputLabel2.style.display = "block";
  }
});
//* icon list

const iconList = document.querySelector(".fa-bars");
const icon = document.querySelector(".icon-links");

const centerLink = document.querySelector(".center-header");

let clickIcon = 0;
iconList.addEventListener("click", () => {
  clickIcon++;
  if (clickIcon % 2 !== 0) {
    iconList.classList.remove("fa-bars");
    iconList.classList.add("fa-xmark");
    icon.style.fontSize = "17px";
    centerLink.style.display = "flex";
  } else {
    iconList.classList.remove("fa-xmark");
    iconList.classList.add("fa-bars");
    icon.style.fontSize = "16px";
    centerLink.style.display = "none";
  }
});
