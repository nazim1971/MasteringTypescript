{
    // Using Getter and Setter in a class
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
  
      // Getter for retrieving balance
      get balance() {
        return this._balance; // Acts like a property when accessed
      }
  
      // Setter for updating balance
      set updateBalance(amount: number) {
        this._balance = this._balance + amount; // Update balance with the provided amount
      }
    }
  
    // Creating an instance of BankAccount
    const poorUserAccount = new BankAccount(101, 'Mr. Poor', 4000);
  
    // Accessing the balance using getter
    const myBalance = poorUserAccount.balance; // Treated as a property
    console.log({ myBalance }); // Logs the initial balance: { myBalance: 4000 }
  
    // Updating the balance using setter
    poorUserAccount.updateBalance = 5000; // Adds 5000 to the existing balance
  
    // Check the updated balance
    console.log({ updatedBalance: poorUserAccount.balance }); // Logs: { updatedBalance: 9000 }
  
    //
  }
  