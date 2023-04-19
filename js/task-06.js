const inputEl = document.querySelector("input");
const inputLength = Number(inputEl.getAttribute("data-length"));
const onInputElBlur = (event) => {
  if (inputEl.value.length !== inputLength) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else if (inputEl.value.length === inputLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
};

inputEl.addEventListener("blur", onInputElBlur);
