function calculateFactorial() {
  var numberInput = document.getElementById("numberInput").value;
  var resultElement = document.getElementById("result");

  // Check if the input is a non-negative integer
  if (Number.isInteger(Number(numberInput)) && Number(numberInput) >= 0) {
    var factorialResult = factorial(Number(numberInput));
    resultElement.innerText = `The factorial of ${numberInput} is: ${factorialResult}`;
  } else {
    resultElement.innerText = "Please enter a non-negative integer.";
  }
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
