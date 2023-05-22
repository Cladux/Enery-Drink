const main = document.querySelector("main");
const upBtn = document.querySelector(".arrow-up");
const downBtn = document.querySelector(".arrow-down");
const lineStatus = document.querySelector(".line-status");

//slider variable
let lineTranslate = 0;
const SLIDEUNIT = 100;
const LASTSLIDE = 300;

// up slider btn
upBtn.addEventListener("click", () => {
  if (lineTranslate > 0) {
    lineTranslate -= SLIDEUNIT;
    lineStatus.style.transform = `translate(-2px, ${lineTranslate}px)`;
  }
  switch (lineTranslate) {
    case 0:
      slideOne();
      break;
    case SLIDEUNIT:
      slideTow();
      break;
    case SLIDEUNIT * 2:
      slideThree();
      break;
  }
});

// down slider btn
downBtn.addEventListener("click", () => {
  if (lineTranslate < LASTSLIDE) {
    lineTranslate += SLIDEUNIT;
    lineStatus.style.transform = `translate(-2px, ${lineTranslate}px)`;
  }
  switch (lineTranslate) {
    case SLIDEUNIT:
      slideTow();
      break;
    case SLIDEUNIT * 2:
      slideThree();
      break;
    case SLIDEUNIT * 3:
      slideFour();
      break;
  }
});

//slider functions
const slideOne = () => {
  return main.classList.remove("slide-2");
};
const slideTow = () => {
  main.classList.remove("slide-3");
  return main.classList.add("slide-2");
};
const slideThree = () => {
  main.classList.remove("slide-2");
  main.classList.remove("slide-4");
  return main.classList.add("slide-3");
};
const slideFour = () => {
  main.classList.remove("slide-3");
  return main.classList.add("slide-4");
};
