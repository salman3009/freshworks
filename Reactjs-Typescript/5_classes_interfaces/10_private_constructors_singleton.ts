

class AccountingDepartment {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(private reports: string[]) {
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment(["employee"]);
    return this.instance;
  }

}

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);


