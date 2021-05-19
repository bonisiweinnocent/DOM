
var billTypeTextElement = document.querySelector(".billTypeText");
var callTotalOneElement = document.querySelector(".callTotalOne")
var smsTotalOneElement = document.querySelector(".smsTotalOne")
var addToBillBtnElement = document.querySelector(".addToBillBtn");

var totalOneElement = document.querySelector(".totalOne")
var textbillInstance = textbill();

function textBillTotal() {

    textbillInstance.bill(billTypeTextElement.value)
    
    callTotalOneElement.innerHTML=textbillInstance.getTotalsCalls()
   
    smsTotalOneElement.innerHTML = textbillInstance.getTotalsms()

    totalOneElement.innerHTML = textbillInstance.total()
    if (textbillInstance.total(billTypeTextElement.value) >= 30 && textbillInstance.total(billTypeTextElement.value) < 50) {
        totalOneElement.classList.add('warning')
    } else if
    (textbillInstance.total(billTypeTextElement.value) >= 50) {
        totalOneElement.classList.add('critical')

}
}

addToBillBtnElement.addEventListener('click', textBillTotal);
