const quoteText = document.querySelector(".quote-text h1");
const authorText = document.querySelector(".author h3");
const quoteBtn = document.querySelector(".btn");
//Our Quote API
const api =("https://type.fit/api/quotes");

//Events
let onClick = quoteBtn.addEventListener("click", function(){
  generateQuote();
});

function generateQuote(){
  fetch(api).then(quote =>{
    return quote.json();
  }).then(finalQuote);

  console.log(finalQuote);
}
function finalQuote(result){
  var randomNum = Math.floor((Math.random() * 1062) + 1);
  quoteText.innerHTML =result[randomNum].text;
  authorText.innerHTML = result[randomNum].author;
}