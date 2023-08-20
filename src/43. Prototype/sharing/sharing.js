function User(name) {
  this.name = name;
}

User.prototype.getDetails = function () {
  console.log(this.name);
};

let user1 = new User("Mark");
let user2 = new User("Bis");

user1.getDetails();
user2.getDetails();

console.log(user1);
console.log(user2);

console.log(User.prototype);
