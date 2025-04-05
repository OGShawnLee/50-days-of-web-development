const progress = document.getElementById("progress");
const circles = document.getElementsByClassName("circle");
const buttonBack = document.getElementById("button-back");
const buttonNext = document.getElementById("button-next");

let currentStep = 0;

function applyProgressWidth() {
  progress.style.width = (currentStep / (circles.length - 1)) * 100 + "%";
}

buttonNext.addEventListener("click", () => {
  currentStep++;

  if (currentStep >= circles.length - 1) {
    currentStep = circles.length - 1;
    buttonNext.disabled = true;
    buttonBack.disabled = false;
  } else {
    buttonBack.disabled = false;
  }

  const activeStep = circles[currentStep];
  activeStep.classList.add("active");
  
  applyProgressWidth();
});

buttonBack.addEventListener("click", () => {
  currentStep--;

  if (currentStep <= 0) {
    currentStep = 0;
    buttonBack.disabled = true;
    buttonNext.disabled = false;
  } else {
    buttonNext.disabled = false;
  }

  const activeStep = circles[currentStep + 1];
  activeStep.classList.remove("active");

  applyProgressWidth();
});