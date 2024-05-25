
const fs = require("fs");

function readFileSafely(filename) {
  try {
    const fs = require('fs'); // Assuming 'fs' is already required at the top level
    const file = fs.openSync(filename, 'r'); // Open the file for reading
    const data = fs.readFileSync(filename, 'utf-8');
    console.log("File content:", data);
  } catch (error) {
    console.error("Error reading file");
  } finally {
    if (file) {
      fs.closeSync(file); // Close the file if it was opened
    }
  }}

readFileSafely("data.txt"); // Call the function
