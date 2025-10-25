/*
    🧠 JavaScript Classes and Constructors

    ✅ What is a Class?
    A class is a blueprint for creating objects with predefined properties and methods.
    It helps organize and reuse code efficiently.

    ✅ What is a Constructor?
    A constructor is a special method in a class that is automatically called when a new object is created.
    It is used to initialize object properties.

    ✅ Syntax:
    class ClassName {
        constructor(parameter1, parameter2) {
            this.property1 = parameter1;
            this.property2 = parameter2;
        }

        // Method
        methodName() {
            // code
        }
    }
*/

class Mobile {
    // Constructor is called only once when the object is created
    constructor(mName, mRam, mStorage, mCamera) {
      this.brandName = mName;
      this.ram = mRam;
      this.storage = mStorage;
      this.camera = mCamera;
    }
  
    // 🔹 Method Example
    updateRam(updatedRam) {
      this.ram = updatedRam;
    }
  
    /*
        ✅ Getters and Setters in JavaScript
        - A getter method allows you to access a property.
        - A setter method allows you to set or modify a property.
        - Getter functions CANNOT take parameters.
        - Setter functions can take only ONE parameter.
    */
  
    // 🔹 Setter
    set updatePrice(price) {
      if (price > 0) {
        this.price = price;
      } else {
        console.log("❌ Price must be greater than 0.");
      }
    }
  
    // 🔹 Getter
    get brandInfo() {
      return `You chose ${this.brandName} brand.`;
    }
  }
  
  // ✅ Creating objects using the Mobile class
  let realmeObj = new Mobile("Realme 8", "4GB", "128GB", "64MP");
  let samsungObj = new Mobile("Samsung S24 Ultra", "16GB", "256GB", "108MP");
  
  // ✅ Calling a method
  realmeObj.updateRam("6GB");
  
  // ✅ Setting a property using setter
  realmeObj.updatePrice = 16000;
  
  // ✅ Accessing a property using getter
  console.log(samsungObj.brandInfo);
  
  // ✅ Displaying the updated object
  console.log(realmeObj);
  
  /*
      -: Inheritance in JavaScript Classes :-
  
      ✅ Definition:
      Inheritance allows one class to acquire properties and methods from another class.
      The `extends` keyword is used to create a subclass (child class).
      The `super()` function calls the parent class constructor.
  */
  
  class Tablet extends Mobile {
    constructor(mName, mRam, mStorage, mCamera, screenSize) {
      // Calls the parent class constructor and initializes its values
      super(mName, mRam, mStorage, mCamera);
      this.screenSize = screenSize;
    }
  
    // Additional method specific to Tablet class
    displayDetails() {
      return `${this.brandName} Tablet has a ${this.screenSize}px screen and ${this.ram} RAM.`;
    }
  }
  
  // ✅ Creating an object of the subclass (Tablet)
  const appleTab = new Tablet("Apple iPad", "8GB", "64GB", "12MP", 1200);
  
  // ✅ Accessing inherited and custom methods
  console.log(appleTab.brandInfo);
  console.log(appleTab.displayDetails());
  
  // ✅ Output the tablet object
  console.log(appleTab);
  
  /*
      📝 Summary:
      - Class: Blueprint for creating objects.
      - Constructor: Initializes object properties.
      - Method: Defines actions or behaviors of the object.
      - Getter/Setter: Used to get or set property values safely.
      - Inheritance: Enables reusing code by extending another class.
  */
  