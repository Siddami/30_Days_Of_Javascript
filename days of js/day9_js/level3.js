//1. Use the countries information, in the data folder.
//Sort countries by name, by capital, by population
var countriesCapAndPop = [
    { name: "United States", capital: "Washington, D.C.", population: 331002651 },
    { name: "Canada", capital: "Ottawa", population: 38005238 },
    { name: "United Kingdom", capital: "London", population: 67886011 },
    { name: 'China',capital: "Beiging", population: 1377422166},
    { name: 'India',capital: "New Delhi", population: 1295210000},
    { name: 'Indonesia',capital: "Jakarta", population: 258705000},
    { name: 'Brazil', capital:"Brasilia", population: 206135893},
    { name: 'Pakistan',capital:"Islamabad", population: 194125062},
    { name: 'Nigeria',capital: "Abuja", population: 186988000},
    { name: 'Bangladesh', capital: " Dhaka", population: 161006790},
    { name: 'Russian Federation', capital: "Moscow", population: 146599183},
    { name: 'Japan', capital: "Tokyo", population: 126960000}
  ];

//  Sort countries by name
  var countriesByName = countriesCapAndPop.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  console.log("Sorted by name:", countriesByName);

  // Sort countries by capital
  var countriesByCapital = countriesCapAndPop.sort(function(a, b) {
    return a.capital.localeCompare(b.capital);
  });
  console.log("Sorted by capital:", countriesByCapital);

  // Sort countries by population
  var countriesByPopulation = countriesCapAndPop.sort(function(a, b) {
    return a.population - b.population;
  });
  console.log("Sorted by population:", countriesByPopulation);

//2. Find the 10 most spoken languages

function MostSpokenLanguages() {
  const languages = [
    { name: 'English', count: 1132 },
    { name: 'Mandarin Chinese', count: 1120 },
    { name: 'Hindi', count: 615 },
    { name: 'Spanish', count: 534 },
    { name: 'French', count: 280 },
    { name: 'Standard Arabic', count: 274 },
    { name: 'Bengali', count: 265 },
    { name: 'Russian', count: 258 },
    { name: 'Portuguese', count: 234 },
    { name: 'Indonesian', count: 199 },
    { name: 'Urdu', count: 170 },
    { name: 'German', count: 132 },
    { name: 'Japanese', count: 128 },
    { name: 'Swahili', count: 98 },
    { name: 'Telugu', count: 93 },
    { name: 'Marathi', count: 92 },
    { name: 'Tamil', count: 81 },
    { name: 'Turkish', count: 79 },
    { name: 'Italian', count: 68 },
    { name: 'Thai', count: 61 }
  ];

  // Sort the languages array in descending order based on count
  languages.sort((a, b) => b.count - a.count);

  // Create a new array with only the top 10 languages
  const top10Languages = languages.slice(0, 10);

  // Create an array with the country and count of each language
  const result = top10Languages.map(language => ({
    language: language.name,
    count: language.count
  }));

  return result;
}

// Call the function and log the result
console.log(MostSpokenLanguages());

//3. create a function which create the ten most populated countries

function tenMostPopulatedCountries(){
  countriesCapAndPop.sort((a, b) => b.count - a.count);

  // Create a new array with only the top 10 languages
  const top10PopulatedCountries = countriesCapAndPop.slice(0, 10);

  // Create an array with the country and count of each population
  const result = top10PopulatedCountries.map(country => ({
    country: country.name,
    population: country.population
  }));
  return result;
}
console.log(tenMostPopulatedCountries())

//4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode)
//and measure of variability(range, variance, standard deviation).
//In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
//You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object.
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
function Statistics(data) {
  this.data = data;
}

Statistics.prototype.mean = function() {
  const sum = this.data.reduce((acc, val) => acc + val, 0);
  return sum / this.data.length;
};

Statistics.prototype.median = function() {
  const sortedData = this.data.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedData.length / 2);

  if (sortedData.length % 2 === 0) {
    return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
  } else {
    return sortedData[middleIndex];
  }
};

Statistics.prototype.mode = function() {
  const frequency = {};
  let maxFrequency = 0;
  let modes = [];

  for (const num of this.data) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFrequency) {
      maxFrequency = frequency[num];
      modes = [num];
    } else if (frequency[num] === maxFrequency) {
      modes.push(num);
    }
  }

  return modes.length === Object.keys(frequency).length ? [] : modes;
};

Statistics.prototype.range = function() {
  const sortedData = this.data.sort((a, b) => a - b);
  return sortedData[sortedData.length - 1] - sortedData[0];
};

Statistics.prototype.variance = function() {
  const mean = this.mean();
  const sumOfSquares = this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
  return sumOfSquares / this.data.length;
};

Statistics.prototype.standardDeviation = function() {
  return Math.sqrt(this.variance());
};

Statistics.prototype.min = function() {
  return Math.min(...this.data);
};

Statistics.prototype.max = function() {
  return Math.max(...this.data);
};

Statistics.prototype.count = function() {
  return this.data.length;
};

Statistics.prototype.percentile = function(percentile) {
  const sortedData = this.data.sort((a, b) => a - b);
  const index = (percentile / 100) * (sortedData.length - 1);
  const lowerIndex = Math.floor(index);
  const upperIndex = Math.ceil(index);

  if (lowerIndex === upperIndex) {
    return sortedData[lowerIndex];
  } else {
    const lowerValue = sortedData[lowerIndex];
    const upperValue = sortedData[upperIndex];
    return lowerValue + (upperValue - lowerValue) * (index - lowerIndex);
  }
};

Statistics.prototype.frequencyDistribution = function() {
  const frequency = {};

  for (const num of this.data) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  return frequency;
};
let stats = new Statistics(ages);
console.log("Mean:", stats.mean());
console.log("Median:", stats.median());
console.log("Mode:", stats.mode());
console.log("Range:", stats.range());
console.log("Variance:", stats.variance());
console.log("Standard Deviation:", stats.standardDeviation());
console.log("Min:", stats.min());
console.log("Max:", stats.max());
console.log("Percentile:", stats.percentile(100));
console.log("Count:", stats.count())
console.log("Range:", stats.range());
