abstract class Department {

  constructor(public name: string) {
  
  }

  abstract describe(this: Department): void;
}

class ITDepartment extends Department {
  constructor() {
    super("IT");
  }

  describe() {
    console.log('IT Department - ID: ');
  }
}


const it = new ITDepartment();
it.describe();


