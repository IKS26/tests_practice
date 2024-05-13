import capitalize from "../src/capitalize.js";

if (capitalize("hello") !== "Hello") {
   throw new Error("Test failed");
}

if (capitalize("") !== "") {
   throw new Error("Test failed");
}

console.log("All tests passed");
