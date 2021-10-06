


describe("the bill with settings factory function" ,function() {

 it ("should be able to set the call cost", function(){
     let settingsBill = BillWithSetting();

     settingsBill.getCallCost(2.75);
     assert.equal(2.75, settingsBill.getCallCost());

     let settingsBill2 = BillWithSetting();
     settingsBill2.setCallCost(2.90);
     assert.equal(2.90, settingsBill2.getCallCost());
 })

it ("should be able to set the sms cost", function(){
     let settingsBill = BillWithSetting();

     settingsBill.getSmsCost(0.65);
     assert.equal(0.65, settingsBill.getSmsCost());

     let settingsBill2 = BillWithSetting();
     settingsBill2.setSmsCost(2.70);
     assert.equal(2.70, settingsBill2.getSmsCost());
 })

 it ("should be able to set the warning level cost", function(){
    let settingsBill = BillWithSetting();

    settingsBill.getWarningLevel(20);
    assert.equal(20, settingsBill.getWarningLevel());

    let settingsBill2 = BillWithSetting();
    settingsBill2.setWarningLevel(20);
    assert.equal(20, settingsBill2.setWarningLevel());
})
 
it ("should be able to set the critical level ", function(){
    let settingsBill = BillWithSetting();

    settingsBill.getCriticalLevel(50);
    assert.equal(50, settingsBill.getCriticalLevel());

    let settingsBill2 = BillWithSetting();
    settingsBill2.setCriticalLevel(50);
    assert.equal(50, settingsBill2.setCriticalLevel());
})

});