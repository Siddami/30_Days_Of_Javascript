//1. Find the person who has many skills in the users object.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  let maxSkillsUser = null;
  let maxSkillsCount = 0;
for(const userKey in users){
   const user = users[userKey];
   const skillsCount = user.skills.length;

   if (skillsCount > maxSkillsCount){
    maxSkillsUser = userKey;
    maxSkillsCount = skillsCount;
   }
}

console.log(`The user with the most skills is ${maxSkillsUser}`);
console.log(`The Number of skills : ${maxSkillsCount}`)

//2. Count logged in users, count users having greater than equal to 50 points from the following object.
let count = 0
for(const userKey in users){
    const user = users[userKey];
    const pointsCount = user.points;
    
    if (pointsCount >= 50){
        count++;
    }
}
console.log(`Users with 50 or more points are ${count}`);

//3. Find people who are MERN stack developer from the users object
let mernCount = 0;
let mernUser = '';

for(const userKey in users){
    const user = users[userKey];
    const skillArray = user.skills;
    if(skillArray.includes('MongoDB') && skillArray.includes('Express') && skillArray.includes('React') && skillArray.includes('Node')){
         mernUser += ' ' + userKey;
         mernCount++;
    }
}
console.log(`The mern stack developers are ${mernCount} ${mernUser}`);

//4. Set your name in the users object without modifying the original users object
let usersCopy = Object.assign(users);
usersCopy.Yetunde = {email: 'dharmmy621@gmail.com',
skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
age: 24,
isLoggedIn: false,
points: 50};
console.log(usersCopy.Yetunde);

//5.  Get all keys or properties of users object
let keys = Object.keys(users);
console.log(keys);

//6. Get all the values of users object
let values = Object.values(users)
console.log(values)

//7. Use the countries object to print a country name, capital, populations and languages.

const countries = {
    Nigeria: {
        capital : 'Abuja',
        populations : '200 million',
        languages : ['English', 'Yoruba', 'Hausa', 'Igbo']
    },
    France : {
        capital : 'Paris',
        populations: '100 million',
        languages: ['English', 'French']
    }
}

console.log(countries)