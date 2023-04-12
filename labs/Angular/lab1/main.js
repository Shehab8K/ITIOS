// constructor(public acc_no: number, public balance: number){}
class Account {
    constructor(acc_no = 0, balance = 0) {
        this.acc_no = acc_no;
        this.balance = balance;
    }
    debitAmount(acc_no) {
        return 10;
    }
    creditAmount(acc_no) {
        return 10;
    }
    getBalance(acc_no) {
        return 10;
    }
}
class current_Account extends Account {
    constructor(acc_no = 0, balance = 0, interest_rate = 0) {
        super(acc_no, balance);
        this.acc_no = acc_no;
        this.balance = balance;
        this.interest_rate = interest_rate;
    }
    addCustomer(customerName) { }
    removeCustomer(customerID) {
        return true;
    }
}
class saving_Account extends Account {
    constructor(acc_no = 0, balance = 0, min_balance = 0) {
        super(acc_no, balance);
        this.acc_no = acc_no;
        this.balance = balance;
        this.min_balance = min_balance;
    }
    addCustomer(customerName) { }
    removeCustomer(customerID) {
        return true;
    }
}
