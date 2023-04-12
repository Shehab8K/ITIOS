// constructor(public acc_no: number, public balance: number){}
abstract class Account{
    constructor(public acc_no=0, public balance=0){}
    debitAmount(acc_no : number): number{
        return 10;
    }
    creditAmount(acc_no: number): number{
        return 10;
    }
    getBalance(acc_no: number) : number{
        return 10;
    }
}

interface IAccount{
    Date_of_opening: Date;
    addCustomer(customerName: string): void;
    removeCustomer(customerID: number): boolean;
}

class current_Account extends Account implements IAccount{
    Date_of_opening: Date;
    constructor(public acc_no=0, public balance=0, public interest_rate=0){
        super(acc_no, balance);
    }

    addCustomer(customerName: string): void {}
    
    removeCustomer(customerID: number): boolean {
        return true;
    }

}

class saving_Account extends Account implements IAccount{
    Date_of_opening: Date;
    constructor(public acc_no=0, public balance=0, public min_balance=0){
        super(acc_no, balance);
    }

    addCustomer(customerName: string): void {}
    
    removeCustomer(customerID: number): boolean {
        return true;
    }

}
