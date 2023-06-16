//1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
function tenMostFrequentWords(string){
    const cleanedString = string.replace(/[^\w\s]/g, '').toLowerCase();

    const words = cleanedString.split(/\s+/);

    const frequencyMap = {};
    for(const word of words){
        if(frequencyMap[word]){
            frequencyMap[word]++;
        }else{
            frequencyMap[word] = 1;
        }
    }

    const wordFrequencyarr = Object.entries(frequencyMap).map(([word, count]) => ({word, count}));
    wordFrequencyarr.sort((a,b) => b.count - a.count);

    const topTenWords = wordFrequencyarr.slice(0,10)


    return topTenWords;
}
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))
