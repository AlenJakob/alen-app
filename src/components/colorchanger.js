const bodyBox = document.querySelector("body");
const radioChangeTheme = document.querySelectorAll(".js-theme-change");
radioChangeTheme.forEach((radio) => {
    radio.addEventListener("change", ()=>{
    bodyBox.classList = radio.value;
  });
});

