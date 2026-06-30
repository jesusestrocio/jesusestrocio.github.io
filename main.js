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

  quizOptionsContainer.style.display = 'none';
  displayFlagContainer.style.display = 'block';

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

const multipleSelection = {
0 : selectionOne,
1 : selectionTwo,
2 : selectionThree,
3 : selectionFour
}

for (let i = 0; i < universalCount + 4; i++){
  multipleSelection[i].textContent = africanFlags[i].country

  // if (universalCount == africanFlags.length - ){
  //   multipleSelection[i].textContent = africanFlags[i].country
  // }

}

// Optional: Handle image load event
newImg.onload = function() {
    console.log('Image loaded successfully');
};

}

const restartQuizButton = document.getElementById("restart-quiz")
const exitQuiz = document.getElementById("exit-to-main-menu")

restartQuizButton.addEventListener('click' , () => {

  universalCount = 0
  highscoreCounter = 0

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

  universalCount = 0
  highscoreCounter = 0

})

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
  
      if (selections.innerHTML == africanFlags[universalCount].country){
        selections.style.color = 'green'; 
        universalCount += 1   
        highscoreCounter += 1
        increaseHighScoreCounted () 
        setTimeout(() => {
          console.log("seTimeout Function");
          selections.style.color = 'black'; 
        }, 3000);
        setTimeout(() => {
          console.log("seTimeout Function");
          loadAfricanFlags()
        }, 5000);

      }
      else {
        selections.style.color = 'red';
        universalCount += 1
        loadAfricanFlags()
      }
      
    });
  })
  
} catch (error) {
  console.log(error)
}


let count = 0;
let newImg = new Image();

// [selectionOne, selectionTwo, selectionThree, selectionFour].forEach((selections)=>{

//   selections.addEventListener("click", () => {

//     let container = document.getElementById('flag-container');
  
//     // Create image using Image() constructor
    
//     newImg.src = flags[count].image;
//     newImg.alt = flags[count].country;
//     newImg.style.width = '100%';
//     newImg.style.height = '100%';
  
    
//     // Add to DOM
//     container.appendChild(newImg);
  
//     selectionOne.textContent = flags[count].multipleChoice[0];
//     selectionTwo.textContent = flags[count].multipleChoice[1];
//     selectionThree.textContent = flags[count].multipleChoice[2];
//     selectionFour.textContent = flags[count].multipleChoice[3];
  
  
//     // Optional: Handle image load event
//     newImg.onload = function() {
//         console.log('Image loaded successfully');
//     };

//     console.log(selections.innerHTML)
//     if (selections.innerHTML == flags[count].country){
//       selections.style.color = 'green';      
//     }
//     else {
//       selections.style.color = 'red';
//     }
    
//     count += 1
  
//   });

//   function changeText(obj) {
//     obj.textContent = "New Text!";
//   }
//   function restoreText(obj) {
//     obj.textContent = "Original Text";
//   }

// })


