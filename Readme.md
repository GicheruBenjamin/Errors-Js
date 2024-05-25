## Intro
Errors hate them>>> love em They are a crucial part of programming in general.Avoiding pushing that **SHITTY ** code to production.  In js  try-catch, throw error and finally are the way to go in handling errors, This is to create robust and user friendly applications.

## Try-Catch
Ii allows you to test a block of code for errors(try). If an error occurs, the code jumps to the error handler(Catch).
try block: Wrap suspicious code within the try block. If an error is thrown within this block, execution jumps to the catch block.
catch block: This block receives an error object (exception) as an argument. You can access error details like type and message within the catch block.

## Throw Error
You can explicitly signal errors using the throw statement. This allows you to create custom errors with specific messages within your code.

## Finally 
The finally block, used in conjunction with try...catch, always executes after the try block, regardless of errors. This is useful for cleanup tasks like closing files or releasing resources.
