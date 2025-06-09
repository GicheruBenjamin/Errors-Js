
import fs from "fs";

export function readFileSafely(filename) {
  let file; // define file outside try
  try {
    file = fs.openSync(filename, 'r'); // open file
    const data = fs.readFileSync(filename, 'utf-8');
    console.log("File content:", data);
  } catch (error) {
    console.error("Error reading file:", error.message);
  } finally {
    if (file !== undefined) {
      fs.closeSync(file); // always close if opened
    }
  }
}
