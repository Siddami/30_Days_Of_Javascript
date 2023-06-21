//1.Create a closure which has one inner function
const levelOneClosure = function (name){
     const greeting = "Hello there!!"
    function innerFunction (){
        const fullGreeting = `${greeting} ${name}`
        return fullGreeting;
     }
    return innerFunction()
}
console.log(levelOneClosure('dammy'));


//LEVEL 2
//1. Create a closure which has three inner functions
const threeInnerFunctions = function (){
    let count = 0

    function sumOfOne(){
        count++
        return count
    }
    function MultipliedBYTwo(){
        count *= 2
        return count
    }

    function isOddOrEven(){
        if(count % 2 === 0){
            return `${count} is an even number.`
        }else{
            return `${count} is an odd number.`
        }
    }

    return{
        sumOfONe: sumOfOne(),
        MultipliedBYTwo: MultipliedBYTwo(),
        isOddOrEven: isOddOrEven()
    }
}
const innerFunctions = threeInnerFunctions()

console.log(innerFunctions.sumOfONe)
console.log(innerFunctions.MultipliedBYTwo)
console.log(innerFunctions.isOddOrEven)


//LEVEL 3
/*Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.
It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions.
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/

function personAccount(){
    const firstname = 'Damilola'
    const lastname = 'Abdul'
    const incomes = [2000, 500, 200]
    const expenses = [100, 200, 500]

    function totalIncome(){
        let total = 0;
        for(const num of incomes){
            total += num
        }
        return total;
    }

    function totalExpense(){
        let total = 0;
        for(const num of expenses){
            total += num
        }
        return total;
    }

    function addIncome(income){
        incomes.push(income)
        return incomes;
    }

    function addExpense(expense){
        expenses.push(expense)
        return expenses;
    }

    function accountBalance(){
        let balance = totalIncome() - totalExpense()
        return balance;
    }

    function accountInfo(){
        let dispersedIncome = incomes.join(', ')
        let dispersedExpense = expenses.join(', ')

        const fullInfo = `Fullname: ${firstname} ${lastname}
        Incomes: ${dispersedIncome}
        Expenses: ${dispersedExpense}`

        return fullInfo;
    }

    return{
        totalIncome : totalIncome(),
        totalExpense : totalExpense(),
        accountInfo : accountInfo(),
        addIncome,
        addExpense,
        accountBalance : accountBalance()
    }
}
const allFunctions = personAccount()
console.log(allFunctions.addIncome(250))
console.log(allFunctions.addExpense(400))
console.log(allFunctions.totalExpense)
console.log(allFunctions.totalIncome)
console.log(allFunctions.accountBalance)
console.log(allFunctions.accountInfo)
