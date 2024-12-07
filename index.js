function onClick() {
  var inputNumber = document.getElementById("inputNumber").value;
  var messageElement = document.getElementById("message");

  if (Number(inputNumber) > 10) {
      messageElement.style.display = "block";
      messageElement.textContent = "Correct!";
  } else {
      messageElement.style.display = "block";
      messageElement.textContent = "The number must be greater than 10.";
  }
  }