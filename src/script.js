function generateItinerary(event) {
  event.preventDefault();

  new Typewriter("#itinerary", {
    strings: "madrid",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let itineraryFormElement = document.querySelector("#itinerary-generator");
itineraryFormElement.addEventListener("submit", generateItinerary);
