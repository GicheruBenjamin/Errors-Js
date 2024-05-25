
function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  }
  
  try {
    let result = divide(10, 0);
  } catch (error) {
    console.error("Error:", error.message);
  }
  // Error: Division by zero