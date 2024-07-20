const CurrentYear = prompt("What is the current year?");

const ChineduInfo = {
  first_name: 'Chinedu',
  last_name: 'Nweke',
  age: CurrentYear - 1999,
  friends: ['Jesuovie', 'Peuliar', 'Samuel', 'Nelson']
};

// assigning more properties to Chinedu's Info
ChineduInfo.university = 'Fupre';
ChineduInfo.wife = 'Holy Ghost';
ChineduInfo.juniorSister1 = 'Chidebere';
ChineduInfo.juniorSister2 = 'Grace';
ChineduInfo.brothers = ['Chinonso', 'Uchenna'];


console.log(`Chinedu's age is ${ChineduInfo.age}`);

const UserResp = prompt("What do you want to know about Chinedu?");

const UserFeedback = (`Chinedu's ${UserResp} is ${ChineduInfo[UserResp]}, and it is a valid information.`);

if (ChineduInfo[UserResp]) console.log(UserFeedback);
else console.log("Chinedu doesn't have such info!");


console.log(ChineduInfo);
console.log(ChineduInfo.brothers[1]);

const finalcomment = (`${ChineduInfo.first_name} has ${ChineduInfo.friends.length} friends, and his best friend is called ${ChineduInfo.friends[ChineduInfo.friends.length - 1]}`);

console.log(finalcomment);