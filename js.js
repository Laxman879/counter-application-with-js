let counrentElement = document.getElementById("counterValue");

function onIncrement() {
  let previousCounterValue = counrentElement.textContent;
  let updatedValue = parseInt(previousCounterValue) + 1;

  if (updatedValue > 0) {
    counrentElement.style.color = "green";
  } else if (updatedValue < 0) {
    counrentElement.style.color = "red";
  } else {
    counrentElement.style.color = "black";
  }
  counrentElement.textContent = updatedValue;
}
function onDecrement() {
  let previousCounterValue = counrentElement.textContent;
  let updatedValue = parseInt(previousCounterValue) - 1;
  if (updatedValue > 0) {
    counrentElement.style.color = "green";
  } else if (updatedValue < 0) {
    counrentElement.style.color = "red";
  } else {
    counrentElement.style.color = "black";
  }
  counrentElement.textContent = updatedValue;
}

function onReset() {
  let counterValue = 0;
  counrentElement.textContent = counterValue;
  counrentElement.style.color = "black";
}
