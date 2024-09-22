function displayPoem(response) {
  new Typewriter("#poem-container", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let instructions = document.querySelector("#instructions");
  let apiKey = "e49t4e467d35faocb8ec3a1644a604fa";
  let context =
    "You are a romantic poem expert and love to write short poem. Your mission is to generate a 4 line poem. Each line will be seperate with a <br/>. Make sure to follow the user instructions below. Do not include a title of the poem. Sign the poem with 'SheCodes AI' inside a <strong> element and font-style italic. Make sure to sign at the end of the poem and NOT at the beginning. ";
  let prompt = `User instructions: Generate a Spanish poem about ${instructions.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
