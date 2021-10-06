

function BillWithSetting() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callsTotalCost = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost) {
        theCallCost = callCost;

    }

    function getCallCost() {
        return theCallCost;
    }

    function setSmsCost(smsCost) {
        theSmsCost = smsCost;

    }

    function getSmsCost() {

        return theSmsCost;
    }

    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function getWarningLevel() {
        return theWarningLevel;
    }

    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel() {
        return theCriticalLevel;
    }

    function makeCall() {
        
        if (!hasReachedCriticalLevel) {
            callsTotalCost += theCallCost;
        }
        
        
    }

    function getTotalCost() {
        return callsTotalCost + smsCostTotal;
    }

    function getTotalCallCost() {
        return callsTotalCost;
    }

    function getTotalSmsCost() {
        return smsCostTotal;
    }

    function SendSms() {
        
        if (!hasReachedCriticalLevel) {

            smsCostTotal += theSmsCost;
        }
        
        
    }

    function hasReachedCriticalLevel() {
        return getTotalCost() >= getCriticalLevel()
    }

    function totalClassName() {
        if (getTotalCost() >= getWarningLevel()) {
            return "warning";
        }

        if (hasReachedCriticalLevel) {
            return "critical";
        }

    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        SendSms,
        totalClassName,
        
    }




};