{
    // Encapsulation: Bundling the data (properties) and methods (functions) into a single unit, and controlling access to them.
    class BankAccount {
        // Protected: Can be accessed within this class and derived classes (subclasses)
        protected id: number;
        
        // Public: Can be accessed from anywhere
        public name: string;
        
        // Private: Can only be accessed within this class
        private _balance: number;
    
        // Constructor to initialize account properties
        constructor(id: number, name: string, balance: number) {
          this.id = id;
          this.name = name;
          this._balance = balance; // Initial balance set privately
        }
    
        // Public method to update the balance, accessible outside the class
        updateBalance = (deposit: number) => {
          this._balance = deposit + this._balance; // Updates the balance
        }
    
        // Private method to get the current balance, only accessible within this class
        private getBalance() {
          return this._balance;
        }
      }
    
      // Subclass of BankAccount (Inheritance)
      class StudentAccount extends BankAccount {
        // Can access the protected `id` from the parent class
        test() {
          console.log(this.id); // Protected access
        }
      }
    
      // Creating an instance of BankAccount
      const poorUserAccount = new BankAccount(101, 'Mr. Poor', 4390);
    
      // Updating the balance using the public method
      poorUserAccount.updateBalance(34450);
      
      // Since `getBalance` is private, it can't be accessed outside the class.
      // The line below would throw an error, as private methods are not accessible from outside the class.
      // const myBal = poorUserAccount.getBalance();  <-- This is not allowed!

      // To access the balance, we'd typically add a public getter method in practice.
      // For now, since `getBalance` is private, it's only accessible inside the class.

      // Logs: `Cannot access the private method 'getBalance' outside its class`
}
