function User(){

}

User.prototype.name = 'Bis';

let user1 = new User();
let user2 = new User();

console.log(user1);

console.log(user1.name);


user1.name='Mark';

console.log(user1.name);
console.log(user2.name);