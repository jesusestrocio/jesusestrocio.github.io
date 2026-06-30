
1 >> Individual continents flag counter goes up as you complete the quiz
2 >> The number of correct flags to the side?
3 >> How to restore the setItem local storage after cookies are cleared?
4 >> Once the user get to the end of the contient quiz they are met with a exit page
4.1 >> Exit Page will have two options 1. Exit Contient 2. Restart quiz



>> CSS for the page 
>> Javascript >> When the last flag is loaded, load the next exit page 
>> Buttons guide the user to the desired pages 
>> High score being displayed on the exit page


>> Currently Stuck On Multiple Seclections
>> The selection should change as we parse through the african flag object


Solution To Create The Multiple Selection Option

let x = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < x.length; i++) {
    let group;

    // If there are at least 3 elements ahead
    if (i <= x.length - 4) {
        group = [x[i], x[i + 1], x[i + 2], x[i + 3]];
    } else {
        // Reverse order for the remaining last elements
        group = [x[i], x[i - 1], x[i - 2], x[i - 3]];
    }
    console.log(group);
}