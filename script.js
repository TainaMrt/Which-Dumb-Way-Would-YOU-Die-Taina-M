let submitButton = document.querySelector(".submit");
let resultOne = document.querySelector(".result-one");
let resultTwo = document.querySelector(".result-two");
let resultThree = document.querySelector(".result-three");
let resultFour = document.querySelector(".result-four");
let resultFive = document.querySelector(".result-five"); 
let resultSix = document.querySelector(".result-six");
let resultSeven = document.querySelector(".result-seven");
let resultEight = document.querySelector(".result-eight");
let resultNine = document.querySelector(".result-nine");
let resultTen = document.querySelector(".result-ten");
let resultEleven = document.querySelector(".result-eleven");
let resultTwelve = document.querySelector(".result-twelve");
let resultThirteen = document.querySelector(".result-thirteen");
let resultFourteen = document.querySelector(".result-fourteen");
let resultFifteen = document.querySelector(".result-fifteen");
let resultSixteen = document.querySelector(".result-sixteen");
let secretResult = document.querySelector(".secret-result");
let redoButton = document.querySelector(".redo-quiz");
let tallyHtml = document.querySelector(".tally");
let tally = 0; 


submitButton.onclick=function() {
redoButton.style.display = "block";

  
  
  
let firstAnswer = document.querySelector(".first-answer");
let secondAnswer= document.querySelector(".second-answer");
let thirdAnswer = document.querySelector(".third-answer");
let fourthAnswer = document.querySelector(".fourth-answer");
  
if(firstAnswer.value >= 5 && secondAnswer.value === "yes" && thirdAnswer.value === "yes" && fourthAnswer.value >= 15) {
      resultOne.style.display = "block";
  
  } else if(firstAnswer.value >= 5 && secondAnswer.value === "yes" && thirdAnswer.value === "no" && fourthAnswer.value >= 15) {
      resultThree.style.display = "block";
  
  } else if(firstAnswer.value >= 5 && secondAnswer.value === "no" && thirdAnswer.value === "no" && fourthAnswer.value >= 15) {
      resultFour.style.display = "block";
  
  } else if(firstAnswer.value >= 5 && secondAnswer.value === "no" && thirdAnswer.value === "yes" && fourthAnswer.value >= 15) {
      resultTwo.style.display = "block";

  } else if(firstAnswer.value >= 5 && secondAnswer.value === "yes" && thirdAnswer.value === "yes" && fourthAnswer.value < 15) {
      resultFive.style.display = "block";
  
  } else if(firstAnswer.value >= 5 && secondAnswer.value === "yes" && thirdAnswer.value === "no" && fourthAnswer.value < 15) {
      resultSix.style.display = "block";

  } else if(firstAnswer.value >= 5 && secondAnswer.value === "no" && thirdAnswer.value === "yes" && fourthAnswer.value < 15) {
      resultSeven.style.display = "block";

  } else if(firstAnswer.value >= 5 && secondAnswer.value === "no" && thirdAnswer.value === "no" && fourthAnswer.value < 15) {
      resultEight.style.display = "block";

  } else if(firstAnswer.value < 5 && secondAnswer.value === "yes" && thirdAnswer.value === "yes" && fourthAnswer.value < 15) {
      resultNine.style.display = "block";

  } else if(firstAnswer.value < 5 && secondAnswer.value === "yes" && thirdAnswer.value === "no" && fourthAnswer.value < 15) {
      resultTen.style.display = "block";

  } else if(firstAnswer.value < 5 && secondAnswer.value === "no" && thirdAnswer.value === "yes" && fourthAnswer.value < 15) {
      resultEleven.style.display = "block";

  } else if(firstAnswer.value < 5 && secondAnswer.value === "no" && thirdAnswer.value === "no" && fourthAnswer.value < 15) {
      resultTwelve.style.display = "block";

  } else if(firstAnswer.value < 5 && secondAnswer.value === "yes" && thirdAnswer.value === "yes" && fourthAnswer.value >= 15) {
      resultThirteen.style.display = "block";

  } else if(firstAnswer.value < 5 && secondAnswer.value === "yes" && thirdAnswer.value === "no" && fourthAnswer.value >= 15) {
      resultFourteen.style.display = "block";

  } else if(firstAnswer.value < 5 && secondAnswer.value === "no" && thirdAnswer.value === "yes" && fourthAnswer.value >= 15) {
      resultFifteen.style.display = "block";

  } else if(firstAnswer.value < 5 && secondAnswer.value === "no" && thirdAnswer.value === "no" && fourthAnswer.value >= 15) {
      resultSixteen.style.display = "block";
  
  } else {
  secretResult.style.display = "block";
}
  
};

redoButton.onclick=function() {
    tally = tally + 1;
    tallyHtml.innerHTML = tally;
    redoButton.style.display = "none";
    resultOne.style.display = "none"; 
  resultTwo.style.display = "none"; 
  resultThree.style.display = "none"; 
  resultFour.style.display = "none"; 
  resultFive.style.display = "none"; 
  resultSix.style.display = "none"; 
  resultSeven.style.display = "none"; 
  resultEight.style.display = "none"; 
  resultNine.style.display = "none"; 
  resultTen.style.display = "none"; 
  resultEleven.style.display = "none"; 
  resultTwelve.style.display = "none"; 
  resultThirteen.style.display = "none"; 
  resultFourteen.style.display = "none"; 
  resultFifteen.style.display = "none"; 
  resultSixteen.style.display = "none";
  secretResult.style.display = "none"; 

}
