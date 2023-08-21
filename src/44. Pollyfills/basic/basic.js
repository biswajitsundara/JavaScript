// Check if String.prototype.startsWith() is not available (older browsers)
if (!String.prototype.startsWith) {
  // Define the polyfill
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;

    return this.indexOf(searchString, position) === position;
  };
}
