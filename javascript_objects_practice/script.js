const CurrentYear = prompt("What is the current year?");

//Object for Chinedu
const ChineduInfo = {
  first_name: 'Chinedu',
  last_name: 'Nweke',
  age: CurrentYear - 1999,
  friends: ['Jesuovie', 'Peuliar', 'Samuel', 'Nelson'],

  //writing a function value within an object

  futureAge: function(){
    return this.age + 5;
  },

  // if statement within function method in an object
  licenseSts: function(){
    if (this.driversLicense == true)
      this.licenseStsValue = 'a';
    else this.licenseStsValue = 'no';

    return this.licenseStsValue;
  },
  // easier method
  getSummary: function(){
    return  `${ChineduInfo.first_name}, ${this.driversLicense
      ? 'has' : "doesn't have"} a driver's license.`
    }

};

// assigning more properties to Chinedu's Info
ChineduInfo.university = 'Fupre';
ChineduInfo.wife = 'Holy Ghost';
ChineduInfo.juniorSister1 = 'Chidebere';
ChineduInfo.juniorSister2 = 'Grace';
ChineduInfo.brothers = ['Chinonso', 'Uchenna'];
ChineduInfo.driversLicense = true;


console.log(`Chinedu's age is ${ChineduInfo.age}`);

const UserResp = prompt("What do you want to know about Chinedu?");

const UserFeedback = (`Chinedu's ${UserResp} is ${ChineduInfo[UserResp]}, and it is a valid information.`);

if (ChineduInfo[UserResp]) console.log(UserFeedback);
else console.log("Chinedu doesn't have such info!");



// console.log(ChineduInfo);
// console.log(ChineduInfo.brothers[1]);

const finalcomment = (`${ChineduInfo.first_name} has ${ChineduInfo.friends.length} friends, and his best friend is called ${ChineduInfo.friends[ChineduInfo.friends.length - 1]}`);

// console.log(finalcomment);
console.log(`${ChineduInfo.first_name}'s current age is 
${ChineduInfo.age}. This is the year ${CurrentYear}.
In the next 5 years, Chinedu will be ${ChineduInfo.futureAge()}
years old. Currently he has ${ChineduInfo.licenseSts()} driver's license`);

 console.log(ChineduInfo.licenseStsValue);

console.log(ChineduInfo.getSummary());