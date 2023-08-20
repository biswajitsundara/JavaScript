function Phone() {
  this.modelNumber = "";
  this.getModelNumber = function () {
    return this.modelNumber;
  };
}

function Samsung() {
  this.modelNumber = "XX-XX-XXX";
  this.latestFeature = function () {
    console.log("Quad Camera");
  };
}

Samsung.prototype = new Phone();

const samsungGalaxy = new Samsung();
console.log(samsungGalaxy.getModelNumber());
samsungGalaxy.latestFeature();
