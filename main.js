const flags = {
  0 : {
    country : 'Albania',
    image : "flag-images/albania.png",
    multipleChoice : ['Albania', 'Africa', 'India', 'United Kingdom']
  },
  1 : {
    country : 'Afghanistan',
    image : "flag-images/afghanistan.png",
    multipleChoice : ['Afghanistan', 'Africa', 'India', 'United Kingdom']
  },
  2 : {
    country : 'Algeria',
    image : "flag-images/algeria.png",
    multipleChoice : ['Algeria', 'Africa', 'India', 'United Kingdom']
  },

};

const selectionOne = document.getElementById("selection-1");
const selectionTwo = document.getElementById("selection-2");
const selectionThree = document.getElementById("selection-3");
const selectionFour = document.getElementById("selection-4");

const africaButton = document.getElementById('Africa');

// <p id="africaButtonText">Africa</p>
// <p id="africaButtonHighScore"></p>

// localStorage.setItem("Africa", JSON.stringify([0,54]));
console.log(JSON.parse(localStorage.getItem('Africa')))

if (localStorage.getItem('Africa') == null){
  localStorage.setItem("Africa", JSON.stringify([0,54]));
}


africaButton.addEventListener('mouseover', ()=>{
  const highscore = document.getElementById("africaButtonHighScore");
  africanFlags.length
  const flagScoreDetails = JSON.parse(localStorage.getItem('Africa'))
  // highscore.textContent = '0 / ' + africanFlags.length;
  highscore.textContent = flagScoreDetails[0] + "/" + flagScoreDetails[1];
})

africaButton.addEventListener("mouseleave", ()=>{
  const highscore = document.getElementById("africaButtonHighScore");
  highscore.textContent = '';
})

africaButton.addEventListener('click' , () => {
  const quizOptionsContainer = document.getElementById("quiz-options-container");
  const  displayFlagContainer = document.getElementById("display-flag-container");

  const multipleNameContainer = document.getElementById("multiple-name-container")
  const flagContainer = document.getElementById("flag-container")

  const endOfQuizPopUp = document.getElementById("end-of-quiz-options")
  
  endOfQuizPopUp.style.display = 'none';

  flagContainer.style.display = 'block';
  multipleNameContainer.style.display = 'block';

  quizOptionsContainer.style.display = 'none';
  displayFlagContainer.style.display = 'block';


  increaseFlagCount(count = 0)

  currentFlagCounter.textContent = `${'0 / ' + africanFlags.length}`

})

// localStorage.setItem("Africa", JSON.stringify([0,54]));
console.log(JSON.parse(localStorage.getItem('Africa')))


const closeButton = document.getElementById("close-button");

closeButton.addEventListener('click' , () => {

  const quizOptionsContainer = document.getElementById("quiz-options-container");
  const  displayFlagContainer = document.getElementById("display-flag-container");

  displayFlagContainer.style.display = 'none';
  quizOptionsContainer.style.display = 'block';

  universalCount = 0
  highscoreCounter = 0

})


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
  length : 10,
}

const startVariable = 0;

africaButton.addEventListener('click' , () => {

  loadAfricanFlags()

})

let universalCount = 0;

function loadAfricanFlags(){

// Keeps count of where you're in the quiz and then stops the quiz when needed
if (universalCount > africanFlags.length){
  const endOfQuizPopUp = document.getElementById("end-of-quiz-options")
  endOfQuizPopUp.style.display = 'block';

  const flagContainer = document.getElementById("flag-container")
  const multipleNameContainer = document.getElementById("multiple-name-container")
  flagContainer.style.display = 'none';
  multipleNameContainer.style.display = 'none';
}


const apiLink = 'https://flagcdn.com/';

let stringM = '';
const countryInitials = africanFlags[universalCount].countryCode.toLowerCase()
stringM = apiLink + countryInitials + '.svg'

console.log(stringM)


// <img src="https://flagcdn.com/ug.svg" width="30" alt="Uganda"></img>
// <img src="https://flagcdn.com/gm.svg" width="30" alt="Gambia"></img>


let container = document.getElementById('flag-container');
  
// Create image using Image() constructor

newImg.src = stringM;
newImg.alt = africanFlags[universalCount].country;
newImg.style.width = '100%';
newImg.style.height = '100%';


// Add to DOM
container.appendChild(newImg);

loadMultipleSelections()

// const multipleSelection = {
// 0 : selectionOne,
// 1 : selectionTwo,
// 2 : selectionThree,
// 3 : selectionFour
// }

// for (let i = 0; i < africanFlags.length; i++){
//   multipleSelection[i].textContent = africanFlags[i].country
// }

// Optional: Handle image load event
newImg.onload = function() {
    console.log('Image loaded successfully');
};

}


function loadMultipleSelections(){

  const multipleSelection = {
    0 : selectionOne,
    1 : selectionTwo,
    2 : selectionThree,
    3 : selectionFour
    }

    console.log(universalCount)
    for (let i = 0; i < 4; i++){

      if ((africanFlags.length - 3) < universalCount){
        console.log(africanFlags[i + universalCount].country)
        multipleSelection[i].textContent = africanFlags[universalCount - i].country
  
      }
      else {
        console.log(africanFlags[i + universalCount].country)
        multipleSelection[i].textContent = africanFlags[universalCount + i].country
      }
      
    }
}

const restartQuizButton = document.getElementById("restart-quiz")
const exitQuiz = document.getElementById("exit-to-main-menu")

restartQuizButton.addEventListener('click' , () => {

  universalCount = 0
  highscoreCounter = 0
  count = 0
  increaseFlagCount(count)

  const endOfQuizPopUp = document.getElementById("end-of-quiz-options")
  endOfQuizPopUp.style.display = 'none';

  const flagContainer = document.getElementById("flag-container")
  const multipleNameContainer = document.getElementById("multiple-name-container")
  
  flagContainer.style.display = 'block';
  multipleNameContainer.style.display = 'block';

  loadAfricanFlags()

})

exitQuiz.addEventListener('click' , () => {


  const quizOptionsContainer = document.getElementById("quiz-options-container");
  const  displayFlagContainer = document.getElementById("display-flag-container");

  displayFlagContainer.style.display = 'none';
  quizOptionsContainer.style.display = 'block';

  const endOfQuizPopUp = document.getElementById("end-of-quiz-options")
  endOfQuizPopUp.style.display = 'none';

  universalCount = 0
  highscoreCounter = 0

})

// {/* <div id="high-score-counter">12/30</div> */}
const currentFlagCounter = document.getElementById("high-score-counter")

function increaseFlagCount(count){
  let originalState = currentFlagCounter.textContent.slice(-4)
  currentFlagCounter.textContent = `${count} ${originalState}` 
}

let highscoreCounter = 0
function increaseHighScoreCounted (){
  let currentHighScore = JSON.parse(localStorage.getItem('Africa'))

  if (highscoreCounter > currentHighScore[0]){
    localStorage.setItem('Africa', JSON.stringify([highscoreCounter,currentHighScore[1]]))
    console.log(JSON.parse(localStorage.getItem('Africa')))
  }
}


try {
  [selectionOne, selectionTwo, selectionThree, selectionFour].forEach((selections)=>{

    selections.addEventListener("click", () => {
  
      console.log(selections.innerHTML)
      increaseFlagCount(count++)
      if (selections.innerHTML == africanFlags[universalCount].country){
        selections.style.color = 'green'; 
        universalCount += 1   
        highscoreCounter += 1
        increaseHighScoreCounted () 
        setTimeout(() => {
          console.log("seTimeout Function");
          selections.style.color = 'black'; 
        }, 1000);
        setTimeout(() => {
          console.log("seTimeout Function");
          loadAfricanFlags()
        }, 2000);

      }
      else {
        selections.style.color = 'red';
        universalCount += 1
        setTimeout(() => {
          console.log("seTimeout Function");
          selections.style.color = 'black'; 
        }, 1000);
        setTimeout(() => {
          console.log("seTimeout Function");
          loadAfricanFlags()
        }, 2000);
      }
      
    });
  })
  
} catch (error) {
  console.log(error)
}


let count = 0;
let newImg = new Image();

const button = document.querySelectorAll(".under-construction");
const popup = document.getElementById("popup");

document.querySelectorAll(".under-construction").forEach(button => {
  button.addEventListener("mouseenter", ()=> {
    const rect = button.getBoundingClientRect();
  
    console.log(rect)
  
    // Position popup below the button
    popup.style.left = `${window.scrollX + rect.left + 2}px`;
    popup.style.top = `${window.scrollY + rect.bottom + 5}px`;
  
    // popup.style.left = `${window.scrollX + 100}px`;
    // popup.style.top = `${window.scrollY + 100}px`;



    popup.style.display = "block";
  })
  });

  document.querySelectorAll(".under-construction").forEach(button => {
    button.addEventListener("mouseleave", ()=> {
      popup.style.display = "none";
    });
});
