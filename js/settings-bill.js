
var callCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");
var callTotalSettingsElement = document.querySelector(".callTotalSettings");
var smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings")
var addOnBtnElement = document.querySelector(".addOnBtn")
var updateSettingsElement = document.querySelector(".updateSettings");

var billString = document.querySelector(".billTypeSettings")

var settingsInstance = billWithSettings();


// callTotalSettingsElement.innerHTML = totalCall.toFixed(2)

// smsTotalSettingsElement.innerHTML = totalSms.toFixed(2);


// totalSettings.innerHTML = grandTotal.toFixed(2);


function settings() {

    callSet = parseFloat(callCostSettingElement.value);
    smsSet = parseFloat(smsCostSettingElement.value);
    criticalSet = parseFloat(criticalLevelSettingElement.value);
    warningSet = parseFloat(warningLevelSettingElement.value);

    settingsInstance.setcallCost(callSet)
    settingsInstance.setsmsCost(smsSet)
    settingsInstance.setCriticalLevel(criticalSet)
    settingsInstance.setWarningLevel(warningSet)

    addClass()

}
function updates() {
    var billItemTypeWithSettingsElement = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (billItemTypeWithSettingsElement) {
        var sett = billItemTypeWithSettingsElement.value
    }
    // settingsInstance.calculate(sett)
    if (billItemTypeWithSettingsElement.value === "call") {
        settingsInstance.makeCall(sett)
    }

    else if
        (billItemTypeWithSettingsElement.value === "sms") {
        settingsInstance.makeSms(sett)
        //     }

    }

    callTotalSettingsElement.innerHTML = settingsInstance.getTotalcallCost().toFixed(2)
    smsTotalSettingsElement.innerHTML = settingsInstance.setTotalsmsCost().toFixed(2)
    totalSettings.innerHTML = settingsInstance.getTotalCost().toFixed(2)
    addClass()
}

function addClass() {

   
        totalSettings.classList.remove('warning')
        totalSettings.classList.remove('critical')

        if (settingsInstance.getTotalCost() >= settingsInstance.getCriticalLevel()) {
            totalSettings.classList.remove('warning')
            totalSettings.classList.add('critical')
        } else if
            (settingsInstance.getTotalCost() >= settingsInstance.getWarningLevel()) {
            totalSettings.classList.remove('critical')
            totalSettings.classList.add('warning')

        }
    }
    updateSettingsElement.addEventListener('click', settings)
    addOnBtnElement.addEventListener('click', updates)
