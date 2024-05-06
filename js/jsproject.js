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

function exit(){
  overlay.style.display = 'none';
  genTabs(20); 
}

function genTabs(tabLimit) {
  const body = document.body;
  const tabContent = ["Please try again", "Bruh", "Pwease just buy the subscwiption", "please try again :(", ":)"];

  let tabCount = 0;

  while (tabCount < tabLimit) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.style.left = `${Math.random() * 90}%`;
    tab.style.top = `${Math.random() * 90}%`;
    tab.textContent = tabContent[Math.floor(Math.random() * tabContent.length)];
    body.appendChild(tab);
    tabCount++;
  }
}
