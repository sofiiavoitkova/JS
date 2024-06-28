//Cleanup After try...catch
function exampleWithoutFinally() {
  try {
    console.log("Working...");
    throw new Error("Error during work");
  } catch (error) {
    console.log("Handling error...");
    throw new Error("Error during error handling");
  }
  console.log("Cleaning up the working space");
}

exampleWithoutFinally();

//Using finally
function exampleUsingFinally() {
  try {
    console.log("Working...");
    throw new Error("Error during work");
  } catch (error) {
    console.log("Handling error...");
    throw new Error("Error during error handling");
  } finally {
    console.log("Cleaning up the working space");
  }
}

exampleUsingFinally();
