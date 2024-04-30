const volumeBar = document.getElementById('volumeBar');
const overlay = document.getElementById('overlay');
const subscriptionPopup = document.getElementById('subscriptionPopup');

volumeBar.addEventListener('mousedown', function(event) {
  event.preventDefault();
  showPopup("This volume is already in use. Please choose another volume.");
});

function showPopup(message) {
  overlay.style.display = 'flex';
  document.querySelector('.popup p').innerText = message;
}

function buySubscription(plan) {
  if (plan === 'monthly') {
    showPopup("To access this feature, please buy the monthly subscription for $2.99.");
  } else if (plan === '3months') {
    showPopup("To access this feature, please buy the 3-months subscription for $3.99.");
  }
}
