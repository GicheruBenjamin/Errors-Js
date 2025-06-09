// main.mjs
import { divide } from './src/throw.mjs';
import { readFileSafely } from './src/fin.mjs';
import { compute } from './src/trycatch.mjs';


console.log("=== Program Start ===");

function main() {
    try {
    const result = divide(10, 2); // change to 0 to test error
    console.log("Division result:", result);
    } catch (err) {
    console.error("Caught divide error:", err.message);
    }

    console.log("\n--- Reading file ---");
    readFileSafely('./src/data.txt'); // make sure this file exists

    console.log("\n--- Running compute ---");
    compute();
}    

main();
console.log("=== Program End ===");
