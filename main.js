const selectionOne = document.getElementById("selection-1");
const selectionTwo = document.getElementById("selection-2");
const selectionThree = document.getElementById("selection-3");
const selectionFour = document.getElementById("selection-4");

const africaButton = document.getElementById('Africa');
const europeanButton = document.getElementById('Europe');


console.log(JSON.parse(localStorage.getItem('Africa')))
console.log(JSON.parse(localStorage.getItem('Europe')))

// localStorage.clear();

// Hard Coding The Max Numbers Of Flags On A Continent
if (localStorage.getItem('Africa') == null){
  localStorage.setItem("Africa", JSON.stringify([0,54]));
}

if (localStorage.getItem('Europe') == null){
  localStorage.setItem("Europe", JSON.stringify([0,49]));
}

const app = document.getElementById("app");
const cookiePopUpSection = document.getElementById("cookie-pop-up");
const acceptAllCookies = document.getElementById("accept-all-cookie");

function cookiePopUp() {
  console.log('Hiding The Application While Cookies Are Being Selected')
  app.style.display = 'none';
}

window.addEventListener('load', (event) => {
    console.log('The page is fully loaded.');
    console.log('Hiding The Application While Cookies Are Being Selected')
    app.style.display = 'none';
    app.style.background = 'blur';

});

acceptAllCookies.addEventListener('click', ()=>{
    app.style.display = 'block';
    cookiePopUpSection.style.display = 'none';
})

// When MouseOver African Button -> Users High Score Is Shown
africaButton.addEventListener('mouseover', () => {
  const highscore = document.getElementById("africaButtonHighScore");
  africanFlags.length
  const flagScoreDetails = JSON.parse(localStorage.getItem('Africa'))
  highscore.textContent = flagScoreDetails[0] + "/" + flagScoreDetails[1];
  console.log(highscore)
})

// When MouseLeave African Button -> Back To It's Original State
africaButton.addEventListener("mouseleave", () => {
  const highscore = document.getElementById("africaButtonHighScore");
  highscore.textContent = '';
})


europeanButton.addEventListener('mouseover', () => {
  const highscore = document.getElementById("europeanButtonHighScore");
  europeanFlags.length
  const flagScoreDetails = JSON.parse(localStorage.getItem('Europe'))
  highscore.textContent = flagScoreDetails[0] + "/" + flagScoreDetails[1];
  console.log(highscore)
})

europeanButton.addEventListener("mouseleave", () => {
  const highscore = document.getElementById("europeanButtonHighScore");
  highscore.textContent = '';
})


const currentFlagCounter = document.getElementById("high-score-counter-text")

const quizOptionsContainer = document.getElementById("quiz-options-container");
const  displayFlagContainer = document.getElementById("display-flag-container");

const multipleNameContainer = document.getElementById("multiple-name-container")
const flagContainer = document.getElementById("flag-container")

const endOfQuizPopUp = document.getElementById("end-of-quiz-options")

const closeButton = document.getElementById("close-button");

const restartQuizButton = document.getElementById("restart-quiz")
const exitQuiz = document.getElementById("exit-to-main-menu")

const button = document.querySelectorAll(".under-construction");
const popup = document.getElementById("popup");

const startVariable = 0;
let universalCount = 0;
let highscoreCounter = 0
let count = 1;

let newImg = new Image();



const africanFlags = {
  0 : {
    country : 'Algeria',
    countryCode : 'DZ',
  },
  1 : {
    country : 'Angola',
    countryCode : 'AO',
  },
  2 : {
    country : 'Benin',
    countryCode : 'BJ',
  },
  3 : {
    country : 'Botswana',
    countryCode : 'BW',
  },
  4 : {
    country : 'Burkina Faso',
    countryCode : 'BF',
  },
  5 : {
    country : 'Burundi',
    countryCode : 'BI',
  },
  6 : {
    country : 'Cabo Verde',
    countryCode : 'CV',
  },
  7 : {
    country : 'Cameroon',
    countryCode : 'CM',
  },
  8 : {
    country : 'Central African Republic',
    countryCode : 'CF',
  },
  9 : {
    country : 'Chad',
    countryCode : 'TD',
  },
  10 : {
    country : 'Comoros',
    countryCode : 'KM',
  },
  length : 11,
}


const europeanFlags = {
  0: { country: 'France', countryCode: 'FR' },
  1: { country: 'Germany', countryCode: 'DE' },
  2: { country: 'Italy', countryCode: 'IT' },
  3: { country: 'Spain', countryCode: 'ES' },
  4: { country: 'Portugal', countryCode: 'PT' },
  5: { country: 'United Kingdom', countryCode: 'GB' },
  6: { country: 'Ireland', countryCode: 'IE' },
  7: { country: 'Netherlands', countryCode: 'NL' },
  8: { country: 'Belgium', countryCode: 'BE' },
  9: { country: 'Sweden', countryCode: 'SE' },
  10: { country: 'Norway', countryCode: 'NO' },
  length : 11,
};

function increaseFlagCount(count){
  currentFlagCounter.textContent = `${count}` 
}

closeButton.addEventListener('click' , () => {

  displayFlagContainer.style.display = 'none';
  quizOptionsContainer.style.display = 'block';

  // Reset the highscore counter to 0
  count = 1

  // Now sure about the below.
  universalCount = 0
  highscoreCounter = 0

})
window.addEventListener('DOMContentLoaded', (event) => {

  [africaButton, europeanButton].forEach((countryButtonClicked) => {

    countryButtonClicked.addEventListener('click' , () => {

      quizOptionsContainer.style.display = 'none';
      displayFlagContainer.style.display = 'block';

      flagContainer.style.display = 'block';
      multipleNameContainer.style.display = 'block';

      endOfQuizPopUp.style.display = 'none';

      currentFlagCounter.textContent = `${count}`

      if (countryButtonClicked == africaButton){
        // loadAfricanFlags()
        loadFlags(africanFlags, 'Africa')
      }
      else if (countryButtonClicked == europeanButton){
          // loadEuropeanFlags()
          loadFlags(europeanFlags, 'Europe')

      }

    })

})
})




// africaButton.addEventListener('click' , () => {
//   // 1. 
//   quizOptionsContainer.style.display = 'none';
//   displayFlagContainer.style.display = 'block';

//   // 2.
//   flagContainer.style.display = 'block';
//   multipleNameContainer.style.display = 'block';
//   // 3. 
//   endOfQuizPopUp.style.display = 'none';

//   currentFlagCounter.textContent = `${count}`
//   // currentFlagCounter.textContent = `${'1 / ' + africanFlags.length}`

//   loadAfricanFlags()

//   //increaseFlagCount(count++);
// })

// europeanButton.addEventListener('click' , () => {
//   // 1. 
//   quizOptionsContainer.style.display = 'none';
//   displayFlagContainer.style.display = 'block';

//   // 2.
//   flagContainer.style.display = 'block';
//   multipleNameContainer.style.display = 'block';
//   // 3. 
//   endOfQuizPopUp.style.display = 'none';

//   currentFlagCounter.textContent = `${count}`

//   loadEuropeanFlags()

//   //increaseFlagCount(count++);
// })


const currentGameHighScore = document.getElementById('current-games-high-score')

function loadFlags(continentPicked, continent){

if (universalCount >= continentPicked.length){

  flagContainer.style.display = 'none';
  multipleNameContainer.style.display = 'none';

  endOfQuizPopUp.style.display = 'grid';

  const flagScoreDetails = JSON.parse(localStorage.getItem(continent))
  // highscore.textContent = flagScoreDetails[0] + "/" + flagScoreDetails[1];

  currentGameHighScore.textContent = highscoreCounter + "/" + flagScoreDetails[1]
  count = 0
  universalCount = 0

}

//id=high-score-counter-total

const totalFlagsInList = document.getElementById('high-score-counter-total');
// totalFlagsInList.textContent = `/${africanFlags.length}`
totalFlagsInList.textContent = '/ ' + `${continentPicked.length}`;

increaseFlagCount(count++);

const apiLink = 'https://flagcdn.com/';

let stringM = '';
console.log('Keeping Track Of Universal Count', universalCount)
const countryInitials = continentPicked[universalCount].countryCode.toLowerCase()
stringM = apiLink + countryInitials + '.svg'

console.log(stringM)

let container = document.getElementById('flag-container');
  
// Create image using Image() constructor

newImg.src = stringM;
newImg.alt = continentPicked[universalCount].country;
newImg.style.width = '100%';
newImg.style.height = '100%';

// Add to DOM
container.appendChild(newImg);

newImg.onload = function(){
  console.log('Image Loaded')
}

// loadMultipleSelections()
// loadMultipleSelectionsForEurope()
loadMultipleSelections(continentPicked)

}

function loadAfricanFlags(){

// If -> User is at the end of the flag quiz
if (universalCount >= africanFlags.length){

  flagContainer.style.display = 'none';
  multipleNameContainer.style.display = 'none';

  endOfQuizPopUp.style.display = 'grid';

  const flagScoreDetails = JSON.parse(localStorage.getItem('Africa'))
  // highscore.textContent = flagScoreDetails[0] + "/" + flagScoreDetails[1];

  currentGameHighScore.textContent = highscoreCounter + "/" + flagScoreDetails[1]
  count = 0
  universalCount = 0

}

//id=high-score-counter-total

const totalFlagsInList = document.getElementById('high-score-counter-total');
// totalFlagsInList.textContent = `/${africanFlags.length}`
totalFlagsInList.textContent = '/ ' + `${africanFlags.length}`;

increaseFlagCount(count++);

const apiLink = 'https://flagcdn.com/';

let stringM = '';
console.log('Keeping Track Of Universal Count', universalCount)
const countryInitials = africanFlags[universalCount].countryCode.toLowerCase()
stringM = apiLink + countryInitials + '.svg'

console.log(stringM)

let container = document.getElementById('flag-container');
  
// Create image using Image() constructor

newImg.src = stringM;
newImg.alt = africanFlags[universalCount].country;
newImg.style.width = '100%';
newImg.style.height = '100%';

// Add to DOM
container.appendChild(newImg);

newImg.onload = function(){
  console.log('Image Loaded')
}

loadMultipleSelections()

}

function loadEuropeanFlags(){

  if (universalCount >= europeanFlags.length){

  flagContainer.style.display = 'none';
  multipleNameContainer.style.display = 'none';

  endOfQuizPopUp.style.display = 'grid';

  const flagScoreDetails = JSON.parse(localStorage.getItem('Europe'))
  // highscore.textContent = flagScoreDetails[0] + "/" + flagScoreDetails[1];

  currentGameHighScore.textContent = highscoreCounter + "/" + flagScoreDetails[1]
  count = 0
  universalCount = 0

}

const totalFlagsInList = document.getElementById('high-score-counter-total');
// totalFlagsInList.textContent = `/${africanFlags.length}`
totalFlagsInList.textContent = '/ ' + `${europeanFlags.length}`;

increaseFlagCount(count++);

const apiLink = 'https://flagcdn.com/';

let stringM = '';
console.log('Keeping Track Of Universal Count', universalCount)
const countryInitials = europeanFlags[universalCount].countryCode.toLowerCase()
stringM = apiLink + countryInitials + '.svg'

console.log(stringM)

let container = document.getElementById('flag-container');
  
// Create image using Image() constructor

newImg.src = stringM;
newImg.alt = europeanFlags[universalCount].country;
newImg.style.width = '100%';
newImg.style.height = '100%';

// Add to DOM
container.appendChild(newImg);

newImg.onload = function(){
  console.log('Image Loaded')
}

loadMultipleSelectionsForEurope()

}

function loadMultipleSelections(continentPicked){

  const multipleSelection = {
    0 : selectionOne,
    1 : selectionTwo,
    2 : selectionThree,
    3 : selectionFour
    }

    console.log(universalCount)

    for (let i = 0; i < 4; i++){

      if (universalCount > (africanFlags.length - 4)){
        multipleSelection[i].textContent = continentPicked[universalCount - i].country
      }
      else {
        console.log(africanFlags[i + universalCount].country)
        multipleSelection[i].textContent = continentPicked[universalCount + i].country
      }
      
    }
}

// function loadMultipleSelections(){

//   const multipleSelection = {
//     0 : selectionOne,
//     1 : selectionTwo,
//     2 : selectionThree,
//     3 : selectionFour
//     }

//     console.log(universalCount)

//     for (let i = 0; i < 4; i++){

//       if (universalCount > (africanFlags.length - 4)){
//         multipleSelection[i].textContent = africanFlags[universalCount - i].country
//       }
//       else {
//         console.log(africanFlags[i + universalCount].country)
//         multipleSelection[i].textContent = africanFlags[universalCount + i].country
//       }
      
//     }
// }

function loadMultipleSelectionsForEurope(){

  const multipleSelection = {
    0 : selectionOne,
    1 : selectionTwo,
    2 : selectionThree,
    3 : selectionFour
    }

    console.log(universalCount)

    for (let i = 0; i < 4; i++){

      if (universalCount > (europeanFlags.length - 4)){
        multipleSelection[i].textContent = europeanFlags[universalCount - i].country
      }
      else {
        console.log(europeanFlags[i + universalCount].country)
        multipleSelection[i].textContent = europeanFlags[universalCount + i].country
      }
      
    }
}



let isProcessing = false;

// [selectionOne, selectionTwo, selectionThree, selectionFour].forEach((selection) => {


//   selection.addEventListener("click", () => {

//     if (isProcessing) return;

//     isProcessing = true;

//     console.log(selection.innerHTML);
//     console.log(count, 'count before increaseing count')

//     if (selection.innerHTML === africanFlags[universalCount].country) {

//       selection.style.color = "green";

//       universalCount += 1;
//       highscoreCounter += 1;

//       increaseHighScoreCounted();

//     } else {

//       selection.style.color = "red";

//       universalCount += 1;
//     }

//     setTimeout(() => {
//       selection.style.color = "black";
//     }, 1000);

//     setTimeout(() => {
//       loadAfricanFlags();
//       isProcessing = false;
//     }, 2000);

//   });

// });


[selectionOne, selectionTwo, selectionThree, selectionFour].forEach((selection) => {

  selection.addEventListener("click", () => {

    if (isProcessing) return;

    isProcessing = true;

    console.log(selection.innerHTML);
    console.log(count, 'count before increaseing count')

    if (selection.innerHTML === europeanFlags[universalCount].country) {

      selection.style.color = "green";

      universalCount += 1;
      highscoreCounter += 1;

      increaseHighScoreCounted();

    } else {
      selection.style.color = "red";
      universalCount += 1;
    }

    setTimeout(() => {
      selection.style.color = "black";
    }, 1000);

    setTimeout(() => {
      loadEuropeanFlags();
      isProcessing = false;
    }, 2000);

  });

});



restartQuizButton.addEventListener('click' , () => {

  universalCount = 0
  highscoreCounter = 0
  count = 1

  endOfQuizPopUp.style.display = 'none';
  
  flagContainer.style.display = 'block';
  multipleNameContainer.style.display = 'block';

  // let isProcessing = true;
  loadFlags()
  // loadAfricanFlags()
  // loadEuropeanFlags()

})

exitQuiz.addEventListener('click' , () => {

  displayFlagContainer.style.display = 'none';
  quizOptionsContainer.style.display = 'block';

  endOfQuizPopUp.style.display = 'none';

  universalCount = 0
  highscoreCounter = 0
  count = 1

})

function increaseHighScoreCounted (){
  let currentHighScore = JSON.parse(localStorage.getItem('Africa'))

  if (highscoreCounter > currentHighScore[0]){
    localStorage.setItem('Africa', JSON.stringify([highscoreCounter,currentHighScore[1]]))
    console.log(JSON.parse(localStorage.getItem('Africa')))
  }
}

document.querySelectorAll(".under-construction").forEach(button => {
  button.addEventListener("mouseenter", ()=> {
    const rect = button.getBoundingClientRect();
  
    console.log(rect)
  
    // Position popup below the button
    popup.style.left = `${window.scrollX + rect.left + 2}px`;
    popup.style.top = `${window.scrollY + rect.bottom + 5}px`;

    popup.style.display = "block";
  })
  });

  document.querySelectorAll(".under-construction").forEach(button => {
    button.addEventListener("mouseleave", ()=> {
      popup.style.display = "none";
    });
});



