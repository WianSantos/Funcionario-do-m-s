var select1 = document.querySelector(".select1");
var select2 = document.querySelector(".select2");
var select3 = document.querySelector(".select3");

// select the <div> elements where the answers will be displayed
var answerDiv1 = document.querySelector(".answer1");
var answerDiv2 = document.querySelector(".answer2");
var answerDiv3 = document.querySelector(".answer3");

// add an event listener to each <select> element
select1.addEventListener("change", updateAnswers);
select2.addEventListener("change", updateAnswers);
select3.addEventListener("change", updateAnswers);

// function to update the answers based on the selected values
function updateAnswers() {
  // get the selected values from the <select> elements
  var selectedOption1 = select1.value;
  var selectedOption2 = select2.value;
  var selectedOption3 = select3.value;

  // display the answers in the <div> elements based on the selected values
  if (selectedOption1 === "option1" && selectedOption2 === "option2" && selectedOption3 === "option3") {
    answerDiv1.innerHTML = "You selected Option 1.";
    answerDiv2.innerHTML = "You selected Option 2.";
    answerDiv3.innerHTML = "You selected Option 3.";
  } else if (selectedOption1 === "option2" && selectedOption2 === "option3" && selectedOption3 === "option1") {
    answerDiv1.innerHTML = "You selected Option 2.";
    answerDiv2.innerHTML = "You selected Option 3.";
    answerDiv3.innerHTML = "You selected Option 1.";
  } else if (selectedOption1 === "option3" && selectedOption2 === "option1" && selectedOption3 === "option2") {
    answerDiv1.innerHTML = "You selected Option 3.";
    answerDiv2.innerHTML = "You selected Option 1.";
    answerDiv3.innerHTML = "You selected Option 2.";
  } else {
    answerDiv1.innerHTML = ""; // if no options are selected, clear the answers
    answerDiv2.innerHTML = "";
    answerDiv3.innerHTML = "";
  }
}