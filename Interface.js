class MyInterface {
    /**
     * @param {string} var1
     * @param {string} var2
     *
     * @return {string}
     */
    firstMethod(var1, var2) {
        var1*=var1;
        var2*=var2;
        return var1+var2;
     }

    /**
     * @return {string}
     */
    secondMethod() {
        console.log("in the secondMethod of Interface")
     }

    /**
     * @param {string} var1
     */
    thirdMethod(var1) { }
}

class MyImplementation extends MyInterface {

    myVar
    constructor(theVar) {
        super();
        this.myVar = theVar
    }

    /**
     * @inheritDoc
     */
    // firstMethod(var1, var2) {
    //     return var1 + var2
    // }

    /**
     * @inheritDoc
     */
    secondMethod() {
        return 'secondMethod'
    }

    /**
     * @inheritDoc
     */
    thirdMethod(var1) {
        this.myVar = var1
    }
}


/**
 * {MyInterface} myObject
 */
const myFunction = () => {
    return new MyImplementation()
}

let obj=myFunction();
console.log(obj.secondMethod())

// here we did not implemented the firstMethod of Implementation object here it is inheriting 
// that method from interface
console.log(obj.firstMethod(5,10))


// Example 2

// Define an interface-like object
const myInterface = {
    method1: function() {},
    method2: function() {}
};

// Implement the interface in another object
const myImplementation = {
    method1: function() {
        console.log("Implementation of method1");
    },
    method2: function() {
        console.log("Implementation of method2");
    }
};

// Check if an object adheres to the "interface"
function implementsInterface(obj) {
    return (
        typeof obj.method1 === "function" &&
        typeof obj.method2 === "function"
    );
}

// Use the interface-like check
if (implementsInterface(myImplementation)) {
    myImplementation.method1();
    myImplementation.method2();
} else {
    console.log("Object does not implement the interface");
}
