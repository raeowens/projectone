

// Variables
var card = $(".card");


// Function to display answers
function showAnswer(){
  var myValue = $(this).attr("value");
  var myHtml = $(this).html();

  $(this).html(myValue);
  $(this).attr('value', myHtml);
}



// Click listener for .card objects
card.on("click", showAnswer);



//card turns over in both directions when clicked.

//user can keep track of right and wrong cards somehow.

//any flashcards marked correct should disappear.

//incorrect flashcards should reappear until they are right.
