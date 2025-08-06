// For all age of life
const ages = document.querySelector(".main-life");
const age = document.querySelector("#age-count");

// For age, that you have lived
const life = document.querySelector("#lived-age");

// for measurement
const measurement = document.querySelector("#measurement");

const ageButton = document.querySelector(".age-count-button");

let arr = [];
let div;

class LiveTimer {
  constructor(div) {
    this.div = div;
  }

  get loop() {
    for (let i = 1; i <= age.value * 12; i++) {
      this.div = document.createElement("div");
      this.div.textContent = i;
      this.div.className = "age";
      this.div.id = i + 1 - 1;

      mainDiv(this.div);

      if (i <= life.value * 12) {
        this.livedLife(this.div);
      }
    }
  }

  livedLife() {
    for (let i = 1; i <= life.value; i += 1) {
      this.div.style.backgroundColor = "green";
    }
  }
}

function mainTips(mainDiv) {
  const tips = document.createElement("div");
  tips.className = "tips";
  mainDiv.appendChild(tips);

  div.addEventListener("mouseover", () => {
    tips.style.display = "block";
  });

  div.addEventListener("mouseleave", () => {
    tips.style.display = "none";
  });
}

function mainDiv(div) {
  const mainDiv = document.createElement("div");
  mainTips(mainDiv);
  mainDiv.className = "main-div";
  mainDiv.appendChild(div);
  ages.appendChild(mainDiv);
}

function deleteFunc() {
  const mainDiv2 = document.querySelectorAll(".main-div");
  for (let i = mainDiv2.length - 1; i >= 0; i--) {
    mainDiv2[i].remove();
  }
}

function calculator() {
  if (measurement.value === "2") {
    deleteFunc();
    const check = new LiveTimer(div);
    check.loop;
  } else if (measurement.value === "3") {
    deleteFunc();
    for (let i = 1; i <= (age.value * 365.25) / 7; i += 1) {
      div = document.createElement("div");
      arr.push(div);
      div.textContent = i;
      div.className = "age";
      div.id = i + 1 - 1;

      mainDiv(div);

      if (i <= (life.value * 365.25) / 7) {
        livedLife();
      }
    }
  } else if (measurement.value === "4") {
    deleteFunc();
    for (let i = 1; i <= age.value * 365.25; i += 1) {
      div = document.createElement("div");
      arr.push(div);
      div.textContent = i;
      div.className = "age";
      div.id = i + 1 - 1;

      mainDiv(div);
      if (i <= life.value * 365.25) {
        livedLife();
      }
    }
  }
}

function valueOfAge() {
  deleteFunc();

  for (let i = 1; i <= age.value; i += 1) {
    div = document.createElement("div");
    arr.push(div);
    div.textContent = i;
    div.className = "age";
    div.id = i + 1 - 1;

    mainDiv(div);

    if (i <= life.value) {
      livedLife();
    }
  }

  calculator();

  const ages = document.querySelectorAll(".age");
  for (let i = 0; i < ages.length; i++) {
    ages[i].addEventListener("click", () => {
      ages[i].style.backgroundColor = "blue";
    });
  }
}

function livedLife() {
  for (let i = 1; i <= life.value; i += 1) {
    div.style.backgroundColor = "green";
  }
}

ageButton.addEventListener("click", valueOfAge);
