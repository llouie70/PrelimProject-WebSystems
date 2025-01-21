let pickRandomChoice = () => {
    const choicesInput = document.getElementById("choicearea");
    const resultElement = document.getElementById("choiceresponse");
    const choices = choicesInput.value.split(",").map((choice) => choice.trim());
    if (choices.length === 0 || (choices.length === 1 && choices[0] === "")) {
      alert("Please enter at least two choices.");
    }
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    resultElement.textContent = `${randomChoice}`;
  };
  const pickButton = document.getElementById("pickforme");
  pickButton.addEventListener("click", pickRandomChoice);