document.querySelector("#categories").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    window.location.href = `/${e.target.id}`;
  }
});
