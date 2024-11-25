function MyClass() {
    // Constructor code here
}

MyClass.prototype.ci1 = function (get) {
    // Function logic here
    console.log("Argument received:", get);
    // Further processing based on the 'get' argument
};

// Example usage:
const instance = new MyClass();
instance.ci1("example input");
