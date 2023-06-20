//1. Change skills array to JSON using JSON.stringify(
    const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
    const skillsJson = JSON.stringify(skills,null, 2);
    console.log(skills);

//2.  Stringify the age variable
    let age = 250;
    const ageJson = JSON.stringify(age, null, 2)
    console.log(age);

//3. Stringify the isMarried variable
    let isMarried = true;
    constisMArriedJson = JSON.stringify(isMarried, null, 2);
    console.log(isMarried);

//4. Stringify the student object
   const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
   }
   const studentJson = JSON.stringify(student, (key, value)=>{
    if (typeof value === 'string'){
        return value.toUpperCase();
    }
    return value;
   }, 3)
   console.log(studentJson);

   //LEVEL 2
   //Stringify the students object with only firstName, lastName and skills properties
   const studentsSpecific = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 2);
   console.log(studentsSpecific);
