let form3 = document.getElementById("form-3");

const bill = document.querySelector("#bill");
const tip = document.querySelectorAll(".btn-tip");
const customTip = document.getElementById("custom-tip");
const people = document.getElementById("people");

const reset = document.getElementById("reset");

var totalTip = document.getElementById("tip");
var amount = document.getElementById("total");

bill.addEventListener("input", billFunc);
people.addEventListener("input", peopleFunc);
customTip.addEventListener("input", customFunc);
reset.addEventListener("click", resetFunc);

bill.value = "0";
people.value = "1";
customTip.value = "";

var billVal = 0;
var peopleVal = 1;
var customVal = 0;
var tipVal = 0;

function billFunc() {
  billVal = parseFloat(bill.value);
  calculate();
}

function peopleFunc() {
  peopleVal = parseFloat(people.value);
  if (peopleVal === 0) {
    errorFunc(people, "Can't be zero");
  } else {
    successFunc(people, "");
    people.style.border = "none";
  }
  calculate();
}

function customFunc() {
  customVal = parseFloat(customTip.value / 100);
  calculateCustom();
}

tip.forEach((tips) => {
  tips.addEventListener("click", () => {
    tipVal = parseFloat(tips.innerHTML) / 100;
    calculate();
  });
});

function calculate() {
  let tipAmount = (billVal * tipVal) / peopleVal;
  let totalPerson = billVal / peopleVal + tipAmount;
  totalTip.innerHTML = "$" + tipAmount.toFixed(2);
  amount.innerHTML = "$" + totalPerson.toFixed(2);
}

function calculateCustom() {
  let tipAmount = (billVal * customVal) / peopleVal;
  let totalPerson = billVal / peopleVal + tipAmount;
  totalTip.innerHTML = "$" + tipAmount.toFixed(2);
  amount.innerHTML = "$" + totalPerson.toFixed(2);
}

function resetFunc() {
  bill.value = "0";
  billFunc();
  people.value = "1";
  peopleFunc();
  customTip.value = "";
  customFunc();
}

form3.addEventListener("input", (e) => {
  e.preventDefault();
  var ppl = parseFloat(people.value);
});

function errorFunc(req, msg) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = msg;
  req.className = "error";
  span.className = "error-text";
}

function successFunc(req, msg) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = msg;
  req.className = "success";
  span.className = "success-text";
}
