//1. Display the countries array as a table
countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
console.table(countries)

//2. Display the countries object as a table
countriesCapPopAndLang = [
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
  console.table(countriesCapPopAndLang);

  //3. Use console.group() to group logs
  (function groupLogs(logs){
    console.group(logs);
  })(countriesCapPopAndLang);
