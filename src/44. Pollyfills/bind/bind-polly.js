const name = {
  firstname: "Biswajit",
  lastName: "Sundara",
};

Function.prototype.mybind = function (...args) {
  let obj = this;
  return function () {
    obj.call(args[0]);
  };
};

const printName = function () {
  console.log(this.firstname + " " + this.lastName);
};

const printMyname = printName.mybind(name);
printMyname();
