class AccountingDepartment{
  static fiscalYear:number =2020;
  
  constructor() {
    console.log(AccountingDepartment.fiscalYear);
  }

  static addReport() {
     console.log("Static method");
  }

}

AccountingDepartment.addReport();






