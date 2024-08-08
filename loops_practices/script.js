// for loop

for(let rep = 1; rep <= 10; rep++){
  console.log(`Lifting weights repetition ${rep}`);
}

//Foor Loop arrays, breaking and Continuing

const chinedu = [
  'Chinedu',
  'Nweke',
  2024 - 1999,
  'Software Engineer',
  ['Jesuovie', 'Peculiar', 'Samuel'],
  'Holy Ghost',
  true
];

// const types =[];

// // arrays are zero based when reading values from an array
// for(let i = 0; i < chinedu.length; i++) {
//   // Reading from Chinedu array
//   console.log(chinedu[i], typeof chinedu[i]);
//   // filling types arrays
//   // types[i] = typeof chinedu[i];
//   types.push(typeof chinedu[i]); //writes to the end of the array.
// }

// console.log (types);

// // Calculating ages and storing into an array

const currentYear = 2024;
const birthyear = [1999, 2000, 2002, 2001, 1997];
const age = [];

for(let i = 0; i < birthyear.length; i++){
  const calcAge = function(){
    return currentYear - birthyear[i];
  }
  age.push(calcAge());
  console.log (`Age no ${birthyear[i]} is ${age[i]}`);
}
console.log(age);

//instructor's Answer
// const years = [1999, 2000, 2002, 2001, 1997];
// const ages = [];

// for(let i = 0; i < years.length; i++){
//   ages.push(2024 - years[i]);
// }
// console.log(ages);


// Continue and break statement
// Continue helps to exit from the current iteration and
// move to another iteration

console.log('---ONLY STRINGS---')
for(let i = 0; i < chinedu.length; i++) {
  if(typeof chinedu[i] !== 'string') continue; 
  console.log(chinedu[i], typeof chinedu[i]);
}
// break exits the entire loop not just the iteration

console.log('---STOP WHEN YOU FIND NUMBER---')
for(let i = 0; i < chinedu.length; i++) {
  if(typeof chinedu[i] == 'number') break; 
  console.log(chinedu[i], typeof chinedu[i]);
}

//looping arrays backwards 

console.log("LOOPING BACKWARDS")
for(let i = chinedu.length - 1; i >= 0; i--) {
  console.log(chinedu[i]);
}

// Loop in a loop

console.log ('Loop in a loop')
for(let excercise = 1; excercise < 4; excercise++){
  console.log(`Starting Exercise ${excercise}`)
    for(let rep = 1; rep < 6; rep++){
      console.log(`Weight lifting ${rep}`);
    }
  }


  // While loop
  console.log('------- DICE GAME (While Loop) --------')
  let dice = Math.trunc(Math.random() * 6) + 1;

  while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice == 6) console.log (`You rolled a ${dice}, you win!!!`);
  }