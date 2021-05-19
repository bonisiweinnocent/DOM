
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");

var radioBillInstance = radioBill()
function radio() {
    var checkedRadioButton = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioButton){
    var billItemType = checkedRadioButton.value

}

    radioBillInstance.billentered(billItemType)
    callTotalTwoElement.innerHTML=(radioBillInstance.getCallCost()).toFixed(2)
    smsTotalTwoElement.innerHTML=(radioBillInstance.getSmsCost()).toFixed(2)
    totalTwoElement.innerHTML=(radioBillInstance.total()).toFixed(2)

  
    if (radioBillInstance.total(billItemTypeRadioElement.value) >= 30 && radioBillInstance.total(billItemTypeRadioElement.value) < 50) {
        totalTwoElement.classList.add('warning')
    } else if
    (radioBillInstance.total(billItemTypeRadioElement.value) >= 50) {
        totalTwoElement.classList.add('critical')
}
}
radioBillAddBtnElement.addEventListener('click', radio);