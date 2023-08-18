let counter = 0;

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function getData() {
  console.log("Fetching data from API", counter++);
}

const handleGetData = debounce(getData, 300);
