
var billStringElement = document.querySelector(".billString");

var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal")
var billTotalSpanElement = document.querySelector(".total");

var calculateInstance = calculate();
function calculateBtnClicked(){


billTotalElement.innerHTML=calculateInstance.count(billStringElement.value)


if (calculateInstance.count(billStringElement.value) >= 20 && calculateInstance.count(billStringElement.value) < 30) {
  billTotalSpanElement.classList.remove("critical")
  billTotalSpanElement.classList.add('warning')

} else if
  (calculateInstance.count(billStringElement.value) >= 30) {
    billTotalSpanElement.classList.add('critical')

}else if(calculateInstance.count(billStringElement.value) <20){
  billTotalSpanElement.classList.remove("critical")
  billTotalSpanElement.classList.remove("warning")
}

// billTotalElement.classList.add(calculateInstance.totalClassName())
}




calculateBtnElement.addEventListener('click', calculateBtnClicked);

