//1. Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Yetunde');
localStorage.setItem('lastName', 'Abdulkareem');
localStorage.setItem('age', 24);
localStorage.setItem('country', 'Nigeria');
localStorage.setItem('city', 'lagos');
console.log(localStorage);

//LEVEL 2
//1.Create a student object. The student object will have first name, last name, age, skills, country,
//enrolled keys and values for the keys.
//Store the student object in your browser localStorage.

const studentObj = {
    firstName: 'Biola',
    lastName: 'Anifowoshe',
    age: 22,
    skills: ['HTML', 'CSS', 'JavaScript', 'BootStrap', 'React'],
    country: 'Nigeria',
    enrolled: true
}
let studentObjJson = JSON.stringify(studentObj)
localStorage.setItem('studentObj',studentObjJson);
console.log(localStorage);


//LEVEL 3
//1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and
//it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
//Incomes is a set of incomes and its description and expenses is also a set of expenses and its description
const PersonAccount = {
     firstname : 'Jude',
     lastname : 'Bassey',
     incomes : {
        Salary: 2000,
        Teaching: 1000,
        Freelance: 3000
     },

     expenses : {
        rent: 1000,
        foodStuffs: 200,
        clothing: 300
     },

     totalIncome: () =>{
     let totalIncome = 0;
     for(let i = 0; i < this.incomes.length; i++){
      totalIncome += this.incomes[i];
     }
     return totalIncome;
    },

    totalExpense: () =>{
      let totalExpense = 0;
      for(let i = 0; i < this.expenses.length; i++){
        totalExpense += this.expenses[i];
      }
      return totalExpense;
    },

    accountInfo: ()=>{
      let incomesList = this.incomes.slice(0, -1).join(',');
      let expenseList = this.expenses.slice(0,-1).join(',');

      let totalInfo = `Name:${this.firstname} ${this.lastname}
      Incomes:${incomesList}
      Expenses:${expenseList}
      totalIncome:${this.totalIncome()}
      totalExpense:${this.totalExpense()}
      totalMoneyLeft:${this.totalIncome()-this.totalExpense()}`
      return totalInfo
    },

    addIncome:(income) =>{
         this.incomes.push(income)
    },

    addExpense: (expense) =>{
      this.expenses.push(expense)
    },

    accountBalance: () => {
      let balance = this.totalIncome() - this.totalExpense()
      return balance;
    }
  }
let stringifiedAccount = JSON.stringify(PersonAccount);
localStorage.setItem('PersonAccount', stringifiedAccount );
