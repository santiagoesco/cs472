describe("Checking Account Test", function () {
    context("Testing the methods on the checking account: ", function () {

        let data = {};
        beforeEach(function () {
            data.balance =  100;
        });
        let acc = new CheckingAccount(1, 20);
        acc.deposit(100);

        it("Get balance value 100 : ", function () {
            assert.equal(acc.getBalance(),100);
        });

        it("Get overdraft value 20: ", function () {
            assert.equal(acc.getOverdraft(),20);
        });
        it("Set overdraft value 50: ", function () {
            acc.setOverdraft(50);
            assert.equal(acc.getOverdraft(),50);
        });
        it("Test withdraw 140 and overdraft ", function () {
            acc.withdraw(140)
            assert.equal(acc.getBalance(),-40 );
        });

        it("Test toString method ", function () {
            assert.equal(acc.toString(),"Checking Account 1 : balance : -40 Overdraft : 50");
        });

    });
});