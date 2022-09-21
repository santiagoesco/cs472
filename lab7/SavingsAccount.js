
/**
 * A Bank Account class
 * 
 * Provides the basic functionality that every account should have
 */
 class SavingsAccount extends Account {
    /**
     * Constructor for creating a new Account object
     * 
     * @param {number} number the number for this account
     */

    constructor(number,interest) {
        super(number);
        this._interest = interest;
    }

    get interest(){
        return this._interest;
    }

    set interest(interest){
        this._interest=interest;
    }

    addInterest(){
        this._balance=this._balance+(this._balance*this._interest/100);
    }
 

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Account " + this._number + ": balance " + this._balance+" :interest";
    }

 
}