/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    source: "Martin Luther King",
    citation: "I Have a Dream speech",
    year: 1963
  },
  {
    quote: "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.",
    source: "Will Ferrell"
  },
  {
    quote: "Here's something to think about: How come you never see a headline like 'Psychic Wins Lottery'?",
    source: "Jay Leno" 
  },
  {
    quote: "I don't like to gamble, but if there's one thing I'm willing to bet on, it's myself.",
    source: "Beyoncé"
  },
  {
    quote: "I really think a champion is defined not by their wins but by how they can recover when they fall.",
    source: "Serena Williams"
  },
  {
    quote: "And as imagination bodies forth. The forms of things unknown, the poet's pen. Turns them to shapes and gives to airy nothing. A local habitation and a name.",
    source: "William Shakespeare",
    citation: "A Midsummer Night's Dream",
    year: 1595
  },  
  {
    quote: "Failure is the condiment that gives success its flavour.",
    source: "Truman Capote"
  }, 
  {
    quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    source: "Steve Jobs"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky"
  }

];




/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};



/***
 * `printQuote` function
***/

const printQuote = () => {
  let randomQuote = getRandomQuote();
  let html = 
  `<p class ="quote"> ${randomQuote['quote']} </p>
  <p class="source"> ${randomQuote['source']} 
  `;
  
  if (randomQuote['citation']) {
    html += `<span class="citation"> ${randomQuote['citation']} </span>`;
  }

  if (randomQuote['year']) {
    html += `<span class="year"> ${randomQuote['year']} </span>`;
  }
  html += "</p>";
  document.getElementById('quote-box').innerHTML = html; 
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);