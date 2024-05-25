
try {
    let result = 10 / (num - 5); // Error if num is not defined
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message); // Handle the error here, like providing a default value or prompting the user for input
  }
  //Num is not defined.