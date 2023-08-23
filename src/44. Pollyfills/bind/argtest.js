function argtest() {
  const arg = Array.prototype.slice.call(arguments);
  console.log(arg);
}

argtest(1, 2, 3);
