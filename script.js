const API_KEY = 'V4aEEkmqFbp+OJ1ULkVZIQ==Gl2Hlbf1AC5gE61m'
const category = 'success'
const url = `https://api.api-ninjas.com/v2/randomquotes?categories=${category}`


const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    form.reset();
});

const quoteEl = document.getElementById('quote');
const newQuoteBtn = document.getElementById('newQuoteBtn');

async function fetchQuote() {
    try {
        const res = await fetch(url, {
          headers: {
            'Content-Type' : 'application/json',
            'X-Api-Key' : API_KEY
          }
        });
        const data = await res.json();
        quoteEl.innerText = `"${data[0].quote}" — ${data[0].author}`;
    } catch (error) {
        quoteEl.innerText = "Could not fetch quote. Try again!";
    }
}

fetchQuote();

newQuoteBtn.addEventListener('click', fetchQuote);


