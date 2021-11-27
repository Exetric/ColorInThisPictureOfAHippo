const Maurice = document.getElementById('maurice');
const Hoffman = document.getElementById('hoffman');
const Jerome = document.getElementById('jerome');
const mainMenu = document.getElementById('startMenu');

const name = document.getElementById('hippoName');
const back = document.getElementById('back');

window.addEventListener("load", () => {
  Maurice.addEventListener("mouseover", () => {
    name.innerHTML="Maurice";
  });
  Hoffman.addEventListener("mouseover", () => {
    name.innerHTML="Hoffman";
  });
  Jerome.addEventListener("mouseover", () => {
    name.innerHTML="Jerome";
  });
  back.addEventListener("click", () => {
    if (confirm('Are you sure you want to go back to the main menu? This will erase all progress made so far.')) {
      document.querySelector('#startMenu').classList.remove("fadeClass");
      mainMenu.style.opacity = "100%";
      mainMenu.style.pointerEvents = "auto";
    }
  });
});
