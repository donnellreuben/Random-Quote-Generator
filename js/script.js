/******************************************
A Random Quote Generator
******************************************/


// to make sure same quote doesn't display twice
let lastRandomNumber = -1;


/*** 
 * QUOTES
***/
const quotes = [
  {
    quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    source: "Martin Luther King",
    citation: "I Have a Dream speech",
    year: 1963,
    tag: "civil rights, equality, justice, politics"
  },
  {
    quote: "Before you get married, you should first make them use a computer, with slow internet, to see who they really are.",
    source: "Will Ferrell",
    tag: "humor, comedy"
  },
  {
    quote: "Here's something to think about: How come you never see a headline like 'Psychic Wins Lottery' ?",
    source: "Jay Leno",
    tag: "humor, comedy" 
  },
  {
    quote: "I don't like to gamble, but if there's one thing I'm willing to bet on, it's myself.",
    source: "Beyoncé",
    tag: "motivation, inspiration, music"
  },
  {
    quote: "I really think a champion is defined not by their wins but by how they can recover when they fall.",
    source: "Serena Williams",
    tag: "sports, motivation, inspiration"
  },
  {
    quote: "And as imagination bodies forth. The forms of things unknown, the poet's pen. Turns them to shapes and gives to airy nothing. A local habitation and a name.",
    source: "William Shakespeare",
    citation: "A Midsummer Night's Dream",
    year: 1595,
    tag: "literature, poetry"
  },  
  {
    quote: "Failure is the condiment that gives success its flavour.",
    source: "Truman Capote",
    tag: "literature, writing, success"
  }, 
  {
    quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    source: "Steve Jobs",
    tag: "business, innovation, technology"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
    tag: "sports, success"
  }
];


/*** 
 * RANDOM QUOTE GENERATOR
***/
const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  
  // for not repeating same quote
  if ( randomNumber === lastRandomNumber ) {
    randomNumber = (randomNumber + 1) % quotes.length;
  }
  lastRandomNumber = randomNumber;
  return quotes[randomNumber];
};


/*** 
 * DISPLAY QUOTE TO HTML
***/
const printQuote = () => {
  let randomQuote = getRandomQuote();
  let html =
  // quote and source (aka author)
  `<p class ="quote">${randomQuote['quote']}</p>
  <p class="source">${randomQuote['source']}`;

  // citation
  if (randomQuote['citation']) {
    html += `<span class="citation">${randomQuote['citation']}</span>`;
  }

  // year
  if (randomQuote['year']) {
    html += `<span class="year">${randomQuote['year']}</span>`;
  }
  html += "</p>";

  // tag
  if (randomQuote['tag']) {
    html += `<span class="tag">${randomQuote['tag']}</span>`;
  }

  document.getElementById('quote-box').innerHTML = html;
};


/*** 
 * EVENT LISTENER
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);


/*** 
 * AUTO REFRESH
***/
// refresh every 10 - 20 seconds
setInterval(printQuote, Math.round(Math.random() * 10000) + 10000 );