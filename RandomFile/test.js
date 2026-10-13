// const africanFlags = {
//   0 : {
//     country : 'Algeria',
//     countryCode : 'DZ',
//   },
//   1 : {
//     country : 'Angola',
//     countryCode : 'AO',
//   },
//   2 : {
//     country : 'Benin',
//     countryCode : 'BJ',
//   },
//   3 : {
//     country : 'Botswana',
//     countryCode : 'BW',
//   },
//   length : 5,
// }

// console.log(africanFlags.length)


// const bestScoreAfrica = [0,10]
// localStorage.setItem('bestScoreAfrica', JSON.stringify(bestScoreAfrica));
// const userData = JSON.parse(localStorage.getItem('bestScoreAfrica'));
// console.log(userData[1]);

// Solution To Create The Multiple Selection Option

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