function throttle(fn, delay) {
  let timeoutId;

  return function (...args) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
        timeoutId = null;
      }, delay);
    }
  };
}

const onScrollThrottled = () => {
  console.log("Throttle function called");
};

// Throttle the function to execute every 500ms
const throttledFunction = throttle(onScrollThrottled, 3000);
