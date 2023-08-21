const name = {
  firstname: "Biswajit",
  lastName: "Sundara",
};

const printName = function () {
  console.log(this.firstname + " " + this.lastName);
};

const printMyname = printName.bind(name);
printMyname();
