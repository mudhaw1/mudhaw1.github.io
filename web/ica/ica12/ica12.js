const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);

const ansBtn = document.querySelector("#js-tweet");
ansBtn.addEventListener('click', getAnswer);

const answerText = document.querySelector("#js-answer-text");

const endpt = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

let answer= '';


async function getQuote(){

    try {
        const response = await fetch(endpt);
        if(!response.ok){
            throw Error(response.statusText)
        }
    
    const json = await response.json();
    displayQuote(json['question']);
    answer = json['answer'];
    answerText.textContent = '';

    } catch (err) {
       console.log(err);
       alert('Failed to fetch new quote');
    }
}

function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function getAnswer(){
    answerText.textContent = answer;
}