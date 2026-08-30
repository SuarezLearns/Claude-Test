const greeting = document.getElementById('greeting');
const greetBtn = document.getElementById('greet-btn');

const messages = [
  'Hello, World!',
  'Hi there!',
  'Greetings, Earthling!',
  'Hey! 👋'
];

greetBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  greeting.textContent = messages[randomIndex];
});
