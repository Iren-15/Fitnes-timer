let timer;
let workTime = Number(document.querySelector("#work-time").value);
let restTime = Number(document.querySelector("#rest-time").value);
let numberSets = Number(document.querySelector("#sets").value);

let amountTime = workTime*60;
let setEnd = false;
let round = 0;

document.querySelector("#work-time").addEventListener("keyup", ()=> {
    workTime = Number(document.querySelector("#work-time").value);
});

document.querySelector("#rest-time").addEventListener("keyup", ()=> {
    restTime = Number(document.querySelector("#rest-time").value);
});

document.querySelector("#sets").addEventListener("keyup", ()=> {
    numberSets = Number(document.querySelector("#sets").value);
});

document.querySelector(".less-work").addEventListener("click", () => {
    let inputTime = Number(document.querySelector("#work-time").value);
    if (inputTime > 0) {
        document.querySelector("#work-time").value = inputTime - 1;
        workTime = Number(document.querySelector("#work-time").value);
    }
});

document.querySelector(".more-work").addEventListener("click", () => {
    let inputTime = Number(document.querySelector("#work-time").value);
    document.querySelector("#work-time").value = inputTime + 1;
    workTime = Number(document.querySelector("#work-time").value);
});

document.querySelector(".less-rest").addEventListener("click", () => {
    let inputTime = Number(document.querySelector("#rest-time").value);
    if (inputTime > 0) {
        document.querySelector("#rest-time").value = inputTime - 1;
        restTime = Number(document.querySelector("#rest-time").value);
    }
});

document.querySelector(".more-rest").addEventListener("click", () => {
    let inputTime = Number(document.querySelector("#rest-time").value);
    document.querySelector("#rest-time").value = inputTime + 1;
    restTime = Number(document.querySelector("#rest-time").value);
});

document.querySelector(".less-sets").addEventListener("click", () => {
    let inputTime = Number(document.querySelector("#sets").value);
    if (inputTime > 0) {
        document.querySelector("#sets").value = inputTime - 1;
        numberSets = Number(document.querySelector("#sets").value);
    }
});

document.querySelector(".more-sets").addEventListener("click", () => {
    let inputTime = Number(document.querySelector("#sets").value);
    document.querySelector("#sets").value = inputTime + 1;
    numberSets = Number(document.querySelector("#sets").value);
});

document.querySelector(".btn-repeat").addEventListener("click", ()=> {
    document.querySelector(".finished").style.display = "none";
    document.querySelector(".btn-repeat").style.display = "none";
    document.querySelector("h1").style.display = "block";
    document.querySelector(".h-work").style.display = "block";
    document.querySelector(".h-rest").style.display = "block";
    document.querySelector(".h-sets").style.display = "block";
    document.querySelector(".less-work").style.display = "block";
    document.querySelector(".more-work").style.display = "block";
    document.querySelector("#work-time").style.display = "block";
    document.querySelector(".less-rest").style.display = "block";
    document.querySelector(".more-rest").style.display = "block";
    document.querySelector("#rest-time").style.display = "block";
    document.querySelector(".less-sets").style.display = "block";
    document.querySelector(".more-sets").style.display = "block";
    document.querySelector("#sets").style.display = "block";
    document.querySelector(".btn-start").style.display = "block";
})

document.querySelector(".btn-start").addEventListener("click", ()=> {
    document.querySelector("h1").style.display = "none";
    document.querySelector(".h-work").style.display = "none";
    document.querySelector(".h-rest").style.display = "none";
    document.querySelector(".h-sets").style.display = "none";
    document.querySelector(".less-work").style.display = "none";
    document.querySelector(".more-work").style.display = "none";
    document.querySelector("#work-time").style.display = "none";
    document.querySelector(".less-rest").style.display = "none";
    document.querySelector(".more-rest").style.display = "none";
    document.querySelector("#rest-time").style.display = "none";
    document.querySelector(".less-sets").style.display = "none";
    document.querySelector(".more-sets").style.display = "none";
    document.querySelector("#sets").style.display = "none";
    document.querySelector(".btn-start").style.display = "none";
    for (let i = 0; i <= numberSets; i++) {
        timerSet();
    console.log(i);
    }
});

async function timerSet() {
    amountTime = workTime*60;
    setEnd = false;
    round = 0;
    document.body.style.backgroundColor = "red";
    document.querySelector(".txt").style.display = "block";
    document.querySelector(".txt").textContent = "Work";
    document.querySelector(".txt").style.color = "rgb(247, 211, 211)";
   timer = setInterval(calculateTime, 1000);
}

function calculateTime() {
    let minutesTime = Math.floor(amountTime/60);
    let secondsTime = amountTime%60;
    document.querySelector(".timer").textContent = `${minutesTime} : ${secondsTime}`;
    amountTime--;
    if (amountTime < 0) {
        clearInterval(timer);
        if ((round != numberSets) && (setEnd === true)) {timerSet()}
        if (setEnd != true) {
            rest();
        }
        else if (round === numberSets) {
            document.body.style.backgroundColor = "rgb(115, 115, 182)";
            document.querySelector(".finished").style.display = "block";
            document.querySelector(".btn-repeat").style.display = "block";
            document.querySelector("h1").style.display = "none";
            document.querySelector(".h-work").style.display = "none";
            document.querySelector(".h-rest").style.display = "none";
            document.querySelector(".h-sets").style.display = "none";
            document.querySelector(".less-work").style.display = "none";
            document.querySelector(".more-work").style.display = "none";
            document.querySelector("#work-time").style.display = "none";
            document.querySelector(".less-rest").style.display = "none";
            document.querySelector(".more-rest").style.display = "none";
            document.querySelector("#rest-time").style.display = "none";
            document.querySelector(".less-sets").style.display = "none";
            document.querySelector(".more-sets").style.display = "none";
            document.querySelector("#sets").style.display = "none";
            document.querySelector(".btn-start").style.display = "none";
            document.querySelector(".txt").style.display = "none";
        }    
    }
}

function rest() {
    amountTime = restTime*60;
    document.body.style.backgroundColor = "green";
    document.querySelector(".txt").style.display = "block";
    document.querySelector(".txt").textContent = "Rest";
    document.querySelector(".txt").style.color = "rgb(125, 232, 150)";
    timer = setInterval(calculateTime, 1000);
    setEnd = true;
    round++;
}

//пример функции для выполнения таймера, чтоб программа ждала его завершения????
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function play() {
//  for (let i = 0; i < 10; i++) {
//     alert(i);
//     await sleep(100);
// }
// await sleep(1000);
// alert("Done");
// }

// play();





