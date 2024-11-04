{
    // Statics in OOP
  
    class Counter {
      // Static property shared across all instances of the class
      static count: number = 0;
  
      // Method to increment the static count property
      increment() {
        return (Counter.count = Counter.count + 1); // Static property is accessed through the class, not an instance
      }
  
      // Method to decrement the static count property
      decrement() {
        return (Counter.count = Counter.count - 1); // Decrement the static count
      }
    }
  
    // First instance of Counter
    const instance1 = new Counter();
    console.log(instance1.increment()); // Outputs: 1
  
    // Second instance of Counter
    const instance2 = new Counter();
    console.log(instance2.increment()); // Outputs: 2 (Shared static count)
  
    // Third instance to test decrement
    const instance3 = new Counter();
    console.log(instance3.decrement()); // Outputs: 1 (Shared static count decreases)
  
    //
  }
  