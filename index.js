let timerIdWork;
let timerIdBreak;
let workTime = Number(document.querySelector("#work-time").value);
let breakTime = Number(document.querySelector("#break-time").value);
let numberSets = Number(document.querySelector("#sets").value);
let inputNumber;
let amountTime;
let round;

let myAnime = () => {
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.to(".par-action", { scale: 1.2, repeat: -1 });
  tl.to(".par-set", { scale: 1.2, repeat: -1 });
  return tl;
};
let anime = myAnime();

document.querySelector("#work-time").addEventListener("keyup", () => {
  workTime = Number(document.querySelector("#work-time").value);
});

document.querySelector("#break-time").addEventListener("keyup", () => {
  breakTime = Number(document.querySelector("#break-time").value);
});

document.querySelector("#sets").addEventListener("keyup", () => {
  numberSets = Number(document.querySelector("#sets").value);
});

document.querySelector(".less-work").addEventListener("click", () => {
  inputNumber = Number(document.querySelector("#work-time").value);
  if (inputNumber - 1 > 0) {
    document.querySelector("#work-time").value = inputNumber - 1;
  } else {
    document.querySelector("#work-time").value = 0;
  }
  workTime = Number(document.querySelector("#work-time").value);
});

document.querySelector(".more-work").addEventListener("click", () => {
  inputNumber = Number(document.querySelector("#work-time").value);
  document.querySelector("#work-time").value = inputNumber + 1;
  workTime = Number(document.querySelector("#work-time").value);
});

document.querySelector(".less-break").addEventListener("click", () => {
  inputNumber = Number(document.querySelector("#break-time").value);
  if (inputNumber - 1 > 0) {
    document.querySelector("#break-time").value = inputNumber - 1;
  } else {
    document.querySelector("#break-time").value = 0;
  }
  breakTime = Number(document.querySelector("#break-time").value);
});

document.querySelector(".more-break").addEventListener("click", () => {
  inputNumber = Number(document.querySelector("#break-time").value);
  document.querySelector("#break-time").value = inputNumber + 1;
  breakTime = Number(document.querySelector("#break-time").value);
});

document.querySelector(".less-sets").addEventListener("click", () => {
  inputNumber = Number(document.querySelector("#sets").value);
  if (inputNumber - 1 > 0) {
    document.querySelector("#sets").value = inputNumber - 1;
  } else {
    document.querySelector("#sets").value = 1;
  }
  numberSets = Number(document.querySelector("#sets").value);
});

document.querySelector(".more-sets").addEventListener("click", () => {
  inputNumber = Number(document.querySelector("#sets").value);
  document.querySelector("#sets").value = inputNumber + 1;
  numberSets = Number(document.querySelector("#sets").value);
});

document.querySelector(".btn-repeat").addEventListener("click", () => {
  document.querySelector(".finished").style.display = "none";
  document.querySelector(".btn-repeat").style.display = "none";
  document.querySelector("h1").style.display = "block";
  document.querySelector(".h-work").style.display = "block";
  document.querySelector(".h-break").style.display = "block";
  document.querySelector(".h-sets").style.display = "block";
  document.querySelector(".less-work").style.display = "block";
  document.querySelector(".more-work").style.display = "block";
  document.querySelector("#work-time").style.display = "block";
  document.querySelector(".less-break").style.display = "block";
  document.querySelector(".more-break").style.display = "block";
  document.querySelector("#break-time").style.display = "block";
  document.querySelector(".less-sets").style.display = "block";
  document.querySelector(".more-sets").style.display = "block";
  document.querySelector("#sets").style.display = "block";
  document.querySelector(".btn-start").style.display = "block";
});

document.querySelector(".btn-start").addEventListener("click", () => {
  if (workTime < 0 || breakTime < 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Введите число больше 0",
    });
    return false;
  }
    if (isNaN(workTime) || isNaN(breakTime) || isNaN(numberSets) ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Введите число",
    });
    return false;
  }
  if (numberSets < 1) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Введите число от 1",
    });
    return false;
  }
  numberSets = Math.round(numberSets);
  document.querySelector("h1").style.display = "none";
  document.querySelector(".h-work").style.display = "none";
  document.querySelector(".h-break").style.display = "none";
  document.querySelector(".h-sets").style.display = "none";
  document.querySelector(".less-work").style.display = "none";
  document.querySelector(".more-work").style.display = "none";
  document.querySelector("#work-time").style.display = "none";
  document.querySelector(".less-break").style.display = "none";
  document.querySelector(".more-break").style.display = "none";
  document.querySelector("#break-time").style.display = "none";
  document.querySelector(".less-sets").style.display = "none";
  document.querySelector(".more-sets").style.display = "none";
  document.querySelector("#sets").style.display = "none";
  document.querySelector(".btn-start").style.display = "none";
  round = 0;
  timerWork();
});

function timerWork() {
  anime.pause();
  round++;
  amountTime = workTime.toFixed(1) * 60;
  let minutesTime = Math.floor(amountTime / 60);
  let secondsTime = amountTime % 60;
  document.querySelector(
    ".timer"
  ).textContent = `${minutesTime} : ${secondsTime}`;
  document.body.style.backgroundColor = "red";
  document.querySelector(".par-action").style.display = "block";
  document.querySelector(".par-action").textContent = "Work";
  document.querySelector(".par-action").style.color = "rgb(247, 211, 211)";
  document.querySelector(".par-set").style.display = "block";
  document.querySelector(".par-set").textContent = `Set number ${round}`;
  document.querySelector(".par-set").style.color = "rgb(247, 211, 211)";
  document.querySelector("#audio").play();
  timerIdWork = setInterval(calculateWork, 1000);
}

function calculateWork() {
  amountTime--;
  if (amountTime < 0) {
    clearInterval(timerIdWork);
    timerBreak();
  } else {
    minutesTime = Math.floor(amountTime / 60);
    secondsTime = amountTime % 60;
    document.querySelector(
      ".timer"
    ).textContent = `${minutesTime} : ${secondsTime}`;
  }
}

function timerBreak() {
  anime.resume();
  amountTime = breakTime.toFixed(1) * 60;
  minutesTime = Math.floor(amountTime / 60);
  secondsTime = amountTime % 60;
  document.querySelector(
    ".timer"
  ).textContent = `${minutesTime} : ${secondsTime}`;
  document.body.style.backgroundColor = "green";
  document.querySelector(".par-action").textContent = "Break";
  document.querySelector(".par-action").style.color = "rgb(125, 232, 150)";
  document.querySelector(".par-set").style.color = "rgb(125, 232, 150)";
  document.querySelector("#audio").play();

  timerIdBreak = setInterval(calculateBreak, 1000);
}

function calculateBreak() {
  amountTime--;
  if (amountTime < 0) {
    clearInterval(timerIdBreak);
    if (round != numberSets) {
      timerWork();
    } else {
      anime.pause();
      gsap.to(".finished", { duration: 0.5, delay: 0.1, scale: 4 });
      gsap.from(".btn-repeat", { duration: 0.5, delay: 0.6, opacity: 0 });
      gsap.from(".timer", { duration: 0.5, delay: 0.1, opacity: 0 });
      document.querySelector(".timer").textContent = "0 : 0";
      document.body.style.backgroundColor = "rgb(115, 115, 182)";
      document.querySelector(".finished").style.display = "block";
      document.querySelector(".btn-repeat").style.display = "block";
      document.querySelector(".par-action").style.display = "none";
      document.querySelector(".par-set").style.display = "none";
      document.querySelector("#audio").play();
    }
  } else {
    minutesTime = Math.floor(amountTime / 60);
    secondsTime = amountTime % 60;
    document.querySelector(
      ".timer"
    ).textContent = `${minutesTime} : ${secondsTime}`;
  }
}
