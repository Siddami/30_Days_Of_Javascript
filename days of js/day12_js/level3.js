//1. Write a function which cleans text. Clean the following text.
//After cleaning, count three most frequent words in the string
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
function cleanText(text){
   let textClean = text.replace(/[^\w\s]/g, '')

   return(textClean)
}
console.log(cleanText(sentence));


(function threeMostSpokenWords(text){

    const words = text.split(/\s+/);

    const wordsObj = {};
    for(const word of words){
        if(wordsObj[word]){
            wordsObj[word]++;
        }else{
            wordsObj[word] = 1;
        }
    }

    const wordarr = Object.entries(wordsObj).map(([word, count]) => ({word, count}));
    wordarr.sort((a,b) => b.count - a.count);

    const topThreeWords = wordarr.slice(0,3)
    console.log(topThreeWords)
})(cleanText(sentence))
