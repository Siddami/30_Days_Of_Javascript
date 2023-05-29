//1. Create an object literal called personAccount.
//It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense,
//accountInfo,addIncome, addExpense and accountBalance methods.
//Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName : 'Yetunde',
    lastName : 'Abdulkareem',
    incomes : new Map(),
    expenses: new Map(),

    get totalIncome(){
        let total = 0;
        for(let income of this.incomes.values()){
            total += income;
        }
        return total;
    },

    get totalExpense(){
        let total = 0;
        for(let expense of this.expenses.values()){
            total += expense;
        }
        return total;
    },

    get accountInfo(){
        return `${this.firstName} ${this.lastName}`;
    },

    addIncome(description, amount){
        this.incomes.set(description, amount);
    },

    addExpense(description, amount){
        this.expenses.set(description, amount)
    },

    accountBalance(){
        return this.totalIncome - this.totalExpense;
    }
}
personAccount.addIncome('Salary', 2000);
personAccount.addIncome('Bonus', 1000);
personAccount.addExpense('Rent', 500);
personAccount.addExpense('Groceries', 200);

console.log(personAccount.totalIncome)
console.log(personAccount.totalExpense)
console.log(personAccount.accountInfo)
console.log(personAccount.accountBalance())

//2. Imagine you are getting the above users collection from a MongoDB database.
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];


//a. a. Create a function called signUp which allows user to add to the collection.
//If user exists, inform the user that he has already an account.

function signUp(username, email, password) {
    // Check if the user already exists
    const existingUser = users.find(
      (user) => user.username === username || user.email === email
    );

    // If the user already exists, inform the user
    if (existingUser) {
      return "User already has an account!";
    }

    // Generate a random six-length hexadecimal string for _id
    const _id = Math.random().toString(16).substr(2, 6);

    // Create a new user object
    const newUser = {
      _id,
      username,
      email,
      password,
      createdAt: new Date().toISOString(),
      isLoggedIn: false
    };

    // Add the new user to the users array
    users.push(newUser);

    // Return a success message
    return "User signed up successfully!";
  }
console.log(signUp())











//3. The products array has three elements and each of them has six properties.
    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
//a. Create a function called rateProduct which rates the product
function rateProduct(productId, userId, rating) {
// Find the product with the given productId
    const product = products.find((products) => products._id === productId);

// If the product is found
    if (product) {
      // Check if the user has already rated the product
      const existingRating = product.ratings.find((ratings) => ratings.userId === userId);

      if (existingRating) {
        // If the user has already rated, update the rating
        existingRating.rate = rating;
      } else {
        // If the user has not rated, add a new rating
        product.ratings.push({ userId, rate: rating });
      }
        // Return a success message
      return "Product rated successfully!";
    }

   // Return an error message if the product is not found
    return "Product not found!";
  }
  console.log(rateProduct('eedfcf','fg12cy', 5));

  //b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
    // Find the product with the given productId
    const product = products.find((products) => products._id === productId);

    // If the product is found
    if (product) {
      // Get the ratings array
      const ratings = product.ratings;

      // Check if there are any ratings
      if (ratings.length === 0) {
        return 0; // Return 0 if there are no ratings
      }

      // Calculate the sum of ratings
      const sumOfRatings = ratings.reduce((acc, rating) => acc + rating.rate, 0);

      // Calculate the average rating
      const average = sumOfRatings / ratings.length;

      // Round the average to 2 decimal places
      const averageRounded = Math.round(average * 100) / 100;

      // Return the average rating
      return averageRounded;
    }

    // Return an error message if the product is not found
    return "Product not found!";
  }
  console.log(averageRating('eedfcf'))

//4.Create a function called likeProduct.
//This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(productId, userId) {
    // Find the product with the given productId
    const product = products.find((products) => products._id === productId);

    // If the product is found
    if (product) {
      // Check if the user has already liked the product
      const likedIndex = product.likes.findIndex((userId) => userId === userId);

      if (likedIndex !== -1) {
        // If the user has already liked, remove the like
        product.likes.splice(likedIndex, 1);
        return "Like removed successfully!";
      } else {
        // If the user has not liked, add a like
        product.likes.push(userId);
        return "Product liked successfully!";
      }
    }

    // Return an error message if the product is not found
    return "Product not found!";
  }
  console.log(likeProduct('aegfal'))
