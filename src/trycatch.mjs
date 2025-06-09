export function compute() {
  try {
    const number = 5; // or get it from input
    const result = 10 / (number - 5); // will cause division by zero
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
