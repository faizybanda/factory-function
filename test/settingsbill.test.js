let settingsBill = BillWithSetting();
//let settingsBill2 = BillWithSetting();

describe("the testing shoulld work", function () {
    it("should be able to set the call cost", function () {
        // alert("your poes");
        let settingsBill = BillWithSetting();

        settingsBill.setCallCost(2.75);
        assert.equal(2.75, settingsBill.getCallCost());


        settingsBill.setCallCost(2.90);
        assert.equal(2.90, settingsBill.getCallCost());
    })

    it("should be able to set the sms cost", function () {


        settingsBill.setSmsCost(0.65);
        assert.equal(0.65, settingsBill.getSmsCost());


        settingsBill.setSmsCost(2.70);
        assert.equal(2.70, settingsBill.getSmsCost());
    })

    it("should be able to set the warning level cost", function () {


        settingsBill.setWarningLevel(20);
        assert.equal(20, settingsBill.getWarningLevel());


        settingsBill.setWarningLevel(20);
        assert.equal(20, settingsBill.getWarningLevel());
    })

    it("should be able to set the critical level ", function () {

        settingsBill.setCriticalLevel(50);
        assert.equal(50, settingsBill.getCriticalLevel());


        settingsBill.setCriticalLevel(50);
        assert.equal(50, settingsBill.getCriticalLevel());
    })

    describe("should be able to use cost", function () {
        it("should make calls", function () {

            let settingsBill = BillWithSetting();

            settingsBill.setCallCost(2.75);
            settingsBill.setSmsCost(0.65);

            settingsBill.setCriticalLevel(10)

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(8.25, settingsBill.getTotalCost());
            assert.equal(8.25, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
        })

        it("should be able to send sms ", function () {
            let settingsBill = BillWithSetting();

            settingsBill.setCallCost(2.75);
            settingsBill.setSmsCost(0.65);

            settingsBill.SendSms();
            settingsBill.SendSms();
            settingsBill.SendSms();


            assert.equal(1.9500000000000002, settingsBill.getTotalCost());
            assert.equal(0.00, settingsBill.getTotalCallCost());
            assert.equal(1.9500000000000002, settingsBill.getTotalSmsCost());


        })

        it("should be able to send sms and calls ", function () {
            let settingsBill = BillWithSetting();

            settingsBill.setCallCost(2.75);
            settingsBill.setSmsCost(0.65);

            settingsBill.SendSms();
            settingsBill.SendSms();
            settingsBill.SendSms();
            settingsBill.makeCall();

            assert.equal(4.70, settingsBill.getTotalCost());
            assert.equal(2.75, settingsBill.getTotalCallCost());
            assert.equal(1.9500000000000002, settingsBill.getTotalSmsCost());


        })

    });

    describe("interact with warning and critical levels", function () {
        it("should return class name of 'warning' if warning level reaches", function () {

            let settingsBill = BillWithSetting();

            settingsBill.setCallCost(2.75);
            settingsBill.setSmsCost(0.65);

            settingsBill.setWarningLevel(8);

            settingsBill.SendSms();
            settingsBill.SendSms();
            settingsBill.SendSms();
            settingsBill.makeCall();

            assert.equal('critical', settingsBill.totalClassName());


        })

        it("should return class name of 'critical' if critical level reaches", function () {

            let settingsBill = BillWithSetting();

            settingsBill.setCallCost(2.75);
            settingsBill.setSmsCost(0.65);

            settingsBill.setCriticalLevel(10);

            settingsBill.SendSms();
            settingsBill.SendSms();
            settingsBill.SendSms();
            settingsBill.makeCall();

            assert.equal('warning', settingsBill.totalClassName());


        })

    });

});



describe("show warning level", function () {


});

describe("show critical level value", function () {

});



