function billWithSettings() {

    var theCost = 0;
    function setcallCost(cost) {
        theCost = cost;


    }
    function getcallCost() {
        return theCost;

    }
    
    return {
        getcallCost,
setcallCost

}        

    }