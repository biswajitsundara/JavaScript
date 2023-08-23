// Check if Function.prototype.bind() is not available (older browsers)

if (!Function.prototype.mybind) {
  Function.prototype.mybind = function (context) {
    var fn = this;

    // Get additional arguments
    // arguments is a global object we can access inside function
    // arguments is an array like object, so we can't apply slice on it directly
    // We are starting the slicing from the second elements, so starts with 1
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
      //get the arguments for this inner function
      params = Array.prototype.slice.call(arguments);

      // Combine bind and call-time arguments
      var bindArgs = args.concat(params);

      // Invoke the original function with the desired context and arguments
      return fn.apply(context, bindArgs);
    };
  };
}

// Example usage
function greet(name, greet) {
  console.log(`${greet}, ${name}! I'm ${this.message} age ${this.age}`);
}

var person = {
  message: "a friendly person",
  age: 21,
};

var greetPerson = greet.mybind(person, "Biswajit");
greetPerson("Hello"); // Output: Hello, Biswajit! I'm a friendly person
