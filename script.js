const facts = [
    "The Earth is the only planet known to support life.",
    "The human brain is the most complex object in the known universe.",
    "The average person walks the equivalent of three times around the world in their lifetime.",
    "The world's oldest tree is over 5,000 years old.",
    "The world's largest snowflake was 15 inches wide.",
];

const showFactsButton = document.getElementById('show-facts');
const factPlaceholder = document.getElementById('fact-placeholder');

showFactsButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    factPlaceholder.textContent = randomFact;
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Thank you for your message, ${
