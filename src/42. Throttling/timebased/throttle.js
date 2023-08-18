function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    //console.log(now - lastCall);

    if (now - lastCall >= delay) {
      fn.apply(this, args);
      lastCall = now;
    }
  };
}

const onScrollThrottled = () => {
  console.log("Throttle function called");
};

// Throttle the function to execute every 500ms
const throttledFunction = throttle(onScrollThrottled, 3000);
