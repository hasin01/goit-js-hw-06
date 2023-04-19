const inputEl = document.querySelector(".text-input");
const spanEl = document.querySelector("#name-output");

const onInputCreate = (event) => {
  if (!inputEl.value) {
    spanEl.textContent = "Anonymous";
    return;
  }
  spanEl.textContent = inputEl.value;
};

inputEl.addEventListener("input", onInputCreate);
