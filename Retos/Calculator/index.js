const themes = document.getElementsByName("th")
const stylesList = {
  1: "./Styles/style1.css",
  2: "./Styles/style2.css",
  3: "./Styles/style3.css"
}

function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function getTheme() {
  for (var i = 0, l=themes.length; i < l; i++) {
    if (themes[i].checked) {
      theme = themes[i].value
      console.log(" El elemento activo es " + theme)
      console.log(stylesList[theme])
      swapStyleSheet(stylesList[theme])
      break;
    }
  };
  return theme
}

themes.forEach(theme => {
  theme.addEventListener('change', getTheme)
})




const screenElement = document.getElementById("screen");
var memoryValue = 0;
var operation = false;
var lastOperation;

function changeValue(value) {
  if (value===0) {

  }
}

function numberButton(val) {
  if (operation) {
    var value = "0";
    operation = false;
  } else {
    var value = screenElement.innerText;
  }


  if (value===0 && val===0) {
    screenElement.textContent = 0;
  } else if (value==="0") {
    screenElement.textContent = val.toString();
  } else {
    screenElement.textContent = value + val.toString();
  } 
}
function addPoint() {
  if (operation) {
    var value = 0
    operation = false;
  } else {
    var value = screenElement.innerText;
  }
  // console.log("Apretaste el punto")
  if (Number.isInteger(Number(value))) {
    screenElement.textContent = value + ".";
    // console.log("Si es entero, puedo ponerle punto")
  } else if (value == 0) {
    screenElement.textContent = "0.";
  }else {
    // console.log("No es entero, no le puedo poner el punto")
  }
}
function delButton() {
  let value = screenElement.innerText;
  if (value!=0 && value.length > 1) {
    screenElement.textContent = value.slice(0,-1);
  } else if (value.length===1 && value != 0) {
    resetButton()
  }
}
function resetButton() {
  screenElement.textContent = 0;
  memoryValue = 0;
  operation = false;
}
function plusButton() {
  operation = true;
  lastOperation = "+";
  let value = Number(screenElement.innerText);
  // console.log("sumaras " + value + " + " + memoryValue)
  memoryValue = memoryValue + value
  screenElement.textContent = memoryValue
}
function lessButton() {
  operation = true;
  lastOperation = "-";
  let value = Number(screenElement.innerText);
  if (memoryValue === 0) {
    memoryValue = value;
  } else {
    memoryValue = memoryValue  - value;
  }
  screenElement.textContent = memoryValue;
}
function productButton() {
  operation = true;
  // console.log("Multiplicando");
  lastOperation = "*";
  let value = Number(screenElement.innerText);
  if (memoryValue === 0) {
    memoryValue = value;
    console.log(memoryValue + " lalal")
  } else {
    memoryValue = memoryValue  * value;
    console.log(memoryValue + "lololo")
  }
  screenElement.textContent = memoryValue;
}
function divButton() {
  operation = true;
  lastOperation = "/";
  let value = Number(screenElement.innerText);
  if (memoryValue === 0) {
    memoryValue = value;
  } else if (value!=0) {
    memoryValue = memoryValue  / value;
  }
  screenElement.textContent = memoryValue;
}
function equalButton() {
  let value = Number(screenElement.innerText);
  if (lastOperation==="+") {
    screenElement.textContent = value + memoryValue;
    memoryValue = 0;
    operation = true;
  } else if (lastOperation === "-") {
    screenElement.textContent = memoryValue - value;
    memoryValue = 0;
    operation = true;
  } else if (lastOperation === "*") {
    screenElement.textContent = memoryValue * value;
    memoryValue = 0;
    operation = true;
  } else if (lastOperation === "/") {
    screenElement.textContent = memoryValue / value;
    memoryValue = 0;
    operation = true;
  }
}


