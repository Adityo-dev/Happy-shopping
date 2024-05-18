/**
 * Deep clones an object or array.
 * @param {Object|Array} obj - The object or array to deep clone.
 * @returns {Object|Array} - The deep cloned object or array.
 */
function deepClone(obj) {
  // Check if the input is an object or array
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle Array
  if (Array.isArray(obj)) {
    let arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i]);
    }
    return arrCopy;
  }

  // Handle Object
  let objCopy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepClone(obj[key]);
    }
  }
  return objCopy;
}

// Example usage:
const original = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "gaming"],
};

const copy = deepClone(original);
copy.address.city = "Los Angeles";
copy.hobbies.push("hiking");

console.log(original.address.city); // Output: New York
console.log(original.hobbies); // Output: ["reading", "gaming"]
console.log(copy.address.city); // Output: Los Angeles
console.log(copy.hobbies); // Output: ["reading", "gaming", "hiking"]
