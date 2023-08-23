const name = {
  firstname: "Biswajit",
  lastName: "Sundara",
};

Function.prototype.mybind = function (...args) {
  let obj = this;
  const params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const printName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastName + " " + hometown + " " + state
  );
};

const printMyname = printName.mybind(name, "Bhubaneswar");
printMyname("Odisha");
