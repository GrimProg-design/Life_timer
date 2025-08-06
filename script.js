// For all age of life
const ages = document.querySelector(".main-life");
const age = document.querySelector("#age-count");

// For age, that you have lived
const life = document.querySelector("#lived-age");

// for measurement
const measurement = document.querySelector("#measurement");

const ageButton = document.querySelector(".age-count-button");

let div;

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
    for (let i = 1; i <= age.value * 12; i += 1) {
      div = document.createElement("div");
      div.textContent = i;
      div.className = "age";
      div.id = i + 1 - 1;

      mainDiv(div);

      if (i <= life.value * 12) {
        livedLife();
      }
    }
  } else if (measurement.value === "3") {
    deleteFunc();
    for (let i = 1; i <= (age.value * 365.25) / 7; i += 1) {
      div = document.createElement("div");
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
  for(let i = 0; i < ages.length; i++){
    let switchForBlue = true;
    ages[i].addEventListener("click", () => {
      switchForBlue ? ages[i].style.backgroundColor = "blue" : ages[i].style.backgroundColor = "silver";
      switchForBlue = !switchForBlue;
      console.log(switchForBlue)
    })
  }
}

function livedLife() {
  for (let i = 1; i <= life.value; i += 1) {
    div.style.backgroundColor = "green";
  }
}

ageButton.addEventListener("click", valueOfAge);