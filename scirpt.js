// Function 1: Validate Email
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}
console.log(validateEmail("test@example.com")); // true

// Function 2: Get a random listing
const listings = ["Modern Apartment", "Cozy Cabin", "Beach House"];
function getRandomListing() {
  const index = Math.floor(Math.random() * listings.length);
  return listings[index];
}
console.log(`Featured Listing: ${getRandomListing()}`);

// Function 3: Calculate total cost for number of nights
function calculateTotal(pricePerNight, nights) {
  return pricePerNight * nights;
}
console.log(`Total for 3 nights: $${calculateTotal(120, 3)}`);

// Function 4: Store feedback
let feedbackList = [];
function addFeedback(message) {
  feedbackList.push(message);
  return feedbackList;
}
console.log(addFeedback("Loved the stay!"));

// Function 5: Check room availability
function checkAvailability(roomType) {
  const availability = {
    "Studio": "Available",
    "1 Bedroom": "Limited",
    "Villa": "Sold Out"
  };
  return availability[roomType] || "Unknown";
}
console.log(checkAvailability("Villa"));
