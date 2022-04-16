// VARIABLES

let amount = document.querySelector(".amount_input");
let people = document.querySelector(".people_input");
let service = document.querySelector(".service_input");
let btn = document.querySelector(".calc_btn");

let x = document.querySelector(".x");
let resultBox = document.querySelector(".result_box");
let billResult = document.querySelector(".bill");
let eachBillResult = document.querySelector(".each-bill");
let tipResult = document.querySelector(".tip");
let eachTipResult = document.querySelector(".each-tip");

let bill = 0;
let headCount = 0;
let totalTip = 0;
let splitTotal;
let serviceQuality = "undefined";

// MAIN

x.addEventListener("click", closeResults);

amount.addEventListener("input", function (e) {
  bill = parseFloat(e.target.value);
});

people.addEventListener("input", function (e) {
  headCount = parseInt(e.target.value);
});

service.addEventListener("input", function (e) {
  serviceQuality = parseInt(e.target.value);
  console.log(serviceQuality);
});

btn.addEventListener("click", function (e) {
  if (bill !== 0 && headCount !== 0 && serviceQuality !== "undefined") {
    console.log(`Bill: $${bill}`);
    console.log(`Amount of People: ${headCount}`);
    splitBill();
    tipAmount();
    showResults();
  } else {
    console.log("Read Disclaimer and Try Again!");
  }
});

// FUNCTIONS

function splitBill() {
  splitTotal = bill / headCount;
  console.log("Split bill: " + splitTotal);
}

function tipAmount() {
  if (serviceQuality === 1) {
    totalTip = bill * 0.05;
  } else if (serviceQuality === 2) {
    totalTip = bill * 0.1;
  } else if (serviceQuality === 3) {
    totalTip = bill * 0.15;
  } else if (serviceQuality === 4) {
    totalTip = bill * 0.2;
  }
  individualTip = totalTip / headCount;
  console.log(`Individual Tip: ${individualTip}`);
  console.log(`Total Tip: ${totalTip}`);
}

function showResults() {
  resultBox.style.opacity = 1;
  resultBox.style.zIndex = 1;
  billResult.innerHTML = `$${bill}`;
  eachBillResult.innerHTML = `$${Math.round(100 * splitTotal) / 100}`;
  tipResult.innerHTML = `$${Math.round(100 * totalTip) / 100}`;
  eachTipResult.innerHTML = `$${Math.round(100 * individualTip) / 100}`;
}

function clear() {
  amount.value = "";
  people.value = "";
  service.value = "";
  bill = 0;
  headCount = 0;
  serviceQuality = "undefined";
}

function closeResults() {
  resultBox.style.opacity = 0;
  resultBox.style.zIndex = 0;
  clear();
}
