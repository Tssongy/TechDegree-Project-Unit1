/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  An array holding 5 different quote objects with properties such as 'quote', 'source, 'year', citation',
  'tags'. It should be noted that 'year', 'citation', and 'tags' only exist in some objects.
***/
var quotes = [ 
   {quote: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    source: "Albert Camus"},
   {quote: "He who will not economize will have to agonize.",
    source: "Confucius",
    tags:"business"},
   {quote: "There is hopeful symbolism in the fact that flags do not wave in a vacuum.",
    source: "Arthur C. Clarke",
    year: 1917,
    tags: "politics"},
   {quote: "Happiness arises in a state of peace, not of tumult.",
    source: "Ann Radcliffe"},
   {quote: "May the Force be with you.",
    source: "Han Solo",
    citation: "Star Wars"},
];


/***
  This function generates a randon number from 0 to (quotes.length-1) and use that to grab
  a random quote from the quotes array.
***/
function getRandomQuote(){
  var randNum = Math.floor((Math.random()*quotes.length));
  return quotes[randNum];
}



/***
  This will print out a new quote by grabbing a random quote from the quotes array and assigning it to
  the inner html. It will check if properties such as 'citation', 'year', or 'tags' and add them in if so.
***/
function printQuote(){
  var randQuote = getRandomQuote();
  var finalQuote = '';
  finalQuote += 
  '<p class="quote">' + randQuote.quote + '</p>';
  finalQuote += 
  '<p class="source">' + randQuote.source;
  if (randQuote.citation) {
    finalQuote += 
    '<span class = "citation">' + randQuote.citation + '</span>';
  }
  if (randQuote.year){
    finalQuote += 
    '<span class = "year">' + randQuote.year + '</span>';
  }
  if (randQuote.tags){
    finalQuote += 
    '<span class = "tags">' + randQuote.tags + '</span>';
  }
  finalQuote += '</p>';
  document.getElementById('quote-box').innerHTML = finalQuote;
}

/***
  returns a randomised set of r, g, and b values.
***/
function getRandomBackground() {
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var rgb = "r" + "g" + "b" + "(" + r + "," + g + "," + b + ")";
  return rgb;
}

/***
  This will change the background by calling "getRandomBackground" and assigning it to the
  background-color property of the "body".
***/
function changeBackground(){
  document.getElementsByTagName("body")[0].style.backgroundColor = getRandomBackground();
}

/***
  When the "Show another quote" button is pressed, it will change the background and
  print out a new quote.
***/
function buttonAutomation() {
    changeBackground();
    printQuote();
}

/***
  Auto-refreshes the page by calling the "buttonAutomation" function every 5 seconds.
  It should be noted that this function is called when the page first loads (refer to Line 11 of index.html)
***/

function intervalInit(){
  nIntervId = setInterval(buttonAutomation, 5000);
}

/***
  Stops auto-refreshing the page.
***/

function stopInterval(){
  clearInterval(nIntervId);
}
/***
  When the "Show another quote" button is clicked, the event listener refreshes the interval time
  as well as the quote.
***/

document.getElementById('loadQuote').addEventListener("click",function(){
  stopInterval();
  buttonAutomation();
  intervalInit();
})
