{
    // Class representing a bank account with access modifiers
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
  
      // Public method to get the current balance, accessing the private balance
      getBalance() {
        return this._balance;
      }
    }
  
    // Subclass of BankAccount (Inheritance)
    class studentAccount extends BankAccount {
      // Can access the protected `id` from the parent class
      test() {
        console.log(this.id); // Protected access
      }
    }
  
    // Creating an instance of BankAccount
    const poorUserAccount = new BankAccount(101, 'Mr. Poor', 4390);
  
    // Updating the balance using the public method
    poorUserAccount.updateBalance(34450);
    
    // Accessing the balance using the public method
    const myBal = poorUserAccount.getBalance();
    console.log({ myBal }); // Logs: { myBal: 38840 }
  
    //
  }
  