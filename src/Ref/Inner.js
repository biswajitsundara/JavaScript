function hello() {
  let counter = 0;

  return function count() {
    return (counter = counter + 1);
  };
}

const counterInstance = hello();
console.log(counterInstance());
console.log(counterInstance());
