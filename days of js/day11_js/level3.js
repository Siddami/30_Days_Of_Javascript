//1. Destructure the countries object print name, capital, population and languages of all countries
var countriesCapPopAndLang = [
    { name: "United States", capital: "Washington, D.C.", population: 331002651, language: 'English' },
    { name: "Canada", capital: "Ottawa", population: 38005238, language: 'English' },
    { name: "United Kingdom", capital: "London", population: 67886011, language:'English'},
    { name: 'China',capital: "Beiging", population: 1377422166, language: 'Chinese'},
    { name: 'India',capital: "New Delhi", population: 1295210000, language: 'Hindi'},
    { name: 'Indonesia',capital: "Jakarta", population: 258705000, language: 'Indonesian'},
    { name: 'Brazil', capital:"Brasilia", population: 206135893, language: 'portuguese'},
    { name: 'Pakistan',capital:"Islamabad", population: 194125062, language: 'Urdu'},
    { name: 'Nigeria',capital: "Abuja", population: 186988000 , language: 'English'},
    { name: 'Bangladesh', capital: " Dhaka", population: 161006790, language: 'Bengali'},
    { name: 'Russian Federation', capital: "Moscow", population: 146599183, language: 'Russian'},
    { name: 'Japan', capital: "Tokyo", population: 126960000, language: 'Japanese'}
  ];
  for(const {name,capital,population,language} of countriesCapPopAndLang){
    console.log(`Country:${name}, Capital:${capital}, Population:${population}, Language:${language}`)};

//2 A junior developer structure student name, skills
//and score in array of arrays which may not easy to read.
//Destructure the following array name to name,
//skills array to skills, scores array to scores,
//JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name,skill,scores] = student
const jsScore = scores.slice(2, -1).join(', ');
const reactScore = scores.slice(3).join(', ');
console.log(name, skill, jsScore, reactScore);

//3. Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(array){
    const result1 = {};
    const result2 = {};
    const arrResult = [];
    let [data1, data2] = array;
    let [name, skills, scores] = [data1, data2]
    for(const [name, skills, scores] of [data1]){
       result1['name'] = name;
       result1['skills'] = skills;
       result1['scores'] = scores;
    }
  arrResult.push(result1);
    for(const [name, skills, scores] of [data2]){
      result2['name'] = name;
      result2['skills'] = skills;
      result2['scores'] = scores;
    }
    arrResult.push(result2);
  return arrResult;
}
console.log(convertArrayToObject(students));

//3. Copy the student object to newStudent without mutating the original object.
//In the new object add the following ?
//Add Bootstrap with level 8 to the front end skill sets
//Add Express with level 9 to the back end skill sets
//Add SQL with level 8 to the data base skill sets
//Add SQL without level to the data science skill sets

const studentInfo = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}
//i. Copy the student object to newStudent without mutating the original
let newStudent = {...studentInfo};
console.log(newStudent)

//ii. Add Bootstrap with level 8 to the front end skill sets
const {skills} = newStudent;
const {frontEnd} = skills;
let updatedFrontend = [...frontEnd,{skill:'Bootstrap', level:8}]
skills.frontEnd = updatedFrontend;

//iii. Add Express with level 9 to the back end skill sets
const {backEnd} = skills;
updatedBackend = [...backEnd,{skill:'Express', level:9}]
skills.backEnd = updatedBackend;

//iv. Add SQL with level 8 to the data base skill sets
const {dataBase} = skills;
updatedDataBase = [...dataBase,{skill:'SQL', level:8}];
skills.dataBase = updatedDataBase;

//v.Add SQL without level to the data science skill sets
const {dataScience} = skills;
updatedDataScience = [...dataScience,'SQL'];
skills.dataScience = updatedDataScience;
console.log(newStudent);
