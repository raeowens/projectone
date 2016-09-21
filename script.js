

// Variables
var card = $(".card");
var currentCard = 0;
var button = $(".button")


card.hide()
card.eq(currentCard).show()


// Function to display answers
function showAnswer(){
  var myValue = $(this).attr("value");
  var myHtml = $(this).html();

  $(this).html(myValue);
  $(this).attr('value', myHtml);
  $(this).toggleClass("answer");

}
function nextCard(){
  card.hide()
  currentCard++
  card.eq(currentCard).show()
}
function previousCard(){
  card.hide()
  currentCard--
  card.eq(currentCard).show()
}

// Click listener for .card objects
card.on("click", showAnswer);
$("#next").on("click", nextCard);
$("#back").on("click", previousCard);


/*
button.on("click", previousCard)
*/

//if last card is clicked


//tell user they are at the end
