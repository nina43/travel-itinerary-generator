function displayItinerary(response) {
  new Typewriter("#itinerary", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateItinerary(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "1bf07a19dabb35aod3aet5596042cc7f";
  let prompt = `user instructions: generate a travel itinerary about ${instructionsInput.value}`;
  let context =
    "you are travelling to anywhere in the world but do not know what to do. Your mission is to plan a itinerary in basic HTML with sites to see and foods to eat throughout your three day stay at that destination. Make sure to follow the user instructions. SIGN the itinerary with 'SheCodes AI' inside a <strong> element at the END of the itinerary and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let itineraryElement = document.querySelector("#itinerary");
  itineraryElement.classList.remove("hidden");
  itineraryElement.innerHTML = `<div class="blink" >⏳ An itinerary for <strong> ${instructionsInput.value} </strong> is being generated</div>`;

  console.log("generating itinerary");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayItinerary);
}

let itineraryFormElement = document.querySelector("#itinerary-generator");
itineraryFormElement.addEventListener("submit", generateItinerary);
