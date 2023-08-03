//get all header elements
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const country = document.querySelector('#country');
const scores = document.querySelector('#score');
const subButton = document.querySelector('#btn');
const leaderBoard = document.querySelector('.Leaderboard')

//get warning p
const warning = document.querySelector('.warning')

//get all country names from country data and save into a variable
const Countries = countries.map(country => country.name)

//current time
const now = new Date()
let wordMonth = now.toLocaleString('default', { month: 'long' })
let day = now.getDate()
day < 10 ? day = '0' + day: day;
let year = now.getFullYear()
let hour = now.getHours()
hour < 10 ? hour = '0' + hour : hour;
let minute = now.getMinutes()
minute < 10 ? minute = '0' + minute: minute;
const currentTime = `${wordMonth} ${day} ${year} ${hour}:${minute}`
console.log(currentTime)

//minus
const PlayBoards = Array.from(document.querySelectorAll('.playerBoard'))
    PlayBoards.forEach(playboard => {
        const del = playboard.querySelector('#del')
        del.addEventListener('click', () =>{
            playboard.innerHTML = ''
            playboard.className = ''
        })
        let score =playboard.querySelector('.score')
        const plus5 = playboard.querySelector('#plus5')
        const minus5 = playboard.querySelector('#minus5')
        plus5.addEventListener('click', () => {
            score.textContent = parseInt(score.textContent) + 5
            // Sort the playBoard divs based on the score (assuming score is a numerical value)
          PlayBoards.sort((a, b) => {
            const scoreA = parseInt(a.querySelector('.score').textContent);
            const scoreB = parseInt(b.querySelector('.score').textContent);
            return scoreB - scoreA; // Sort in descending order of scores
        });

        // Remove all existing playBoard divs from the leaderBoard
         PlayBoards.forEach(playBoard => leaderBoard.removeChild(playBoard));

        // Add the sorted playBoard divs back to the leaderBoard
         PlayBoards.forEach(playBoard => leaderBoard.appendChild(playBoard));

        })
        minus5.addEventListener('click', () => {
            score.textContent = parseInt(score.textContent) - 5
            // Sort the playBoard divs based on the score (assuming score is a numerical value)
            PlayBoards.sort((a, b) => {
                const scoreA = parseInt(a.querySelector('.score').textContent);
                const scoreB = parseInt(b.querySelector('.score').textContent);
                return scoreB - scoreA; // Sort in descending order of scores
            });

            // Remove all existing playBoard divs from the leaderBoard
             PlayBoards.forEach(playBoard => leaderBoard.removeChild(playBoard));

            // Add the sorted playBoard divs back to the leaderBoard
             PlayBoards.forEach(playBoard => leaderBoard.appendChild(playBoard));
        })
    })


//add event listener to button and create function to add new element when all fields are filled;
subButton.addEventListener('click', () => {
    const fValue = firstName.value.trim()
    const lValue = lastName.value.trim()
    const cValue = country.value.trim()
    const sValue = score.value.trim()
    if(fValue === '' || lValue === '' || cValue === '' || sValue === ''){
        warning.textContent = 'All Fields Required'
        return;
    }

    warning.textContent = ''

//create playborad container and add necessary elements based on input value
  const playBoard = document.createElement('div')
  playBoard.className = 'playerBoard'
  const player = document.createElement('span')
  player.className = 'player'
  const name = document.createElement('p')
  name.textContent = `${fValue.toUpperCase()} ${lValue.toUpperCase()}`
  name.className = 'name'
  const date = document.createElement('p')
  date.textContent = `${currentTime}`
  date.className = 'date'
  player.appendChild(name)
  player.appendChild(date)

  const ctry = document.createElement('span')
  ctry.className = 'country'
  ctry.textContent = cValue.toUpperCase()
  const scr = document.createElement('span')
  scr.className = 'score'
  scr.textContent = sValue
  const circles = document.createElement('span')
  circles.className = 'circles'
  const del = document.createElement('button')
  del.id = 'del'
  del.className = 'c'
  del.textContent = '🗑'
  const plus5 = document.createElement('button')
  plus5.id = 'plus5'
  plus5.className = 'c'
  plus5.textContent = '+5'
  const minus5 = document.createElement('button')
  minus5.id = 'minus5'
  minus5.className = 'c'
  minus5.textContent = '-5'
  circles.appendChild(del)
  circles.appendChild(plus5)
  circles.appendChild(minus5)

  playBoard.appendChild(player)
  playBoard.appendChild(ctry)
  playBoard.appendChild(scr)
  playBoard.appendChild(circles)

  leaderBoard.appendChild(playBoard)


  const allPlayBoards = Array.from(document.querySelectorAll('.playerBoard'));

        // Sort the playBoard divs based on the score (assuming score is a numerical value)
        allPlayBoards.sort((a, b) => {
            const scoreA = parseInt(a.querySelector('.score').textContent);
            const scoreB = parseInt(b.querySelector('.score').textContent);
            return scoreB - scoreA; // Sort in descending order of scores
        });

        // Remove all existing playBoard divs from the leaderBoard
        allPlayBoards.forEach(playBoard => leaderBoard.removeChild(playBoard));

        // Add the sorted playBoard divs back to the leaderBoard
        allPlayBoards.forEach(playBoard => leaderBoard.appendChild(playBoard));

    const PlayBoards = Array.from(document.querySelectorAll('.playerBoard'))
    PlayBoards.forEach(playboard => {
        const del = playboard.querySelector('#del')
        del.addEventListener('click', () =>{
            playboard.innerHTML = ''
            playboard.className = ''
        })
        let score =playboard.querySelector('.score')
        const plus5 = playboard.querySelector('#plus5')
        const minus5 = playboard.querySelector('#minus5')
        plus5.addEventListener('click', () => {
            score.textContent = parseInt(score.textContent) + 5
            // Sort the playBoard divs based on the score (assuming score is a numerical value)
          PlayBoards.sort((a, b) => {
            const scoreA = parseInt(a.querySelector('.score').textContent);
            const scoreB = parseInt(b.querySelector('.score').textContent);
            return scoreB - scoreA; // Sort in descending order of scores
        });

        // Remove all existing playBoard divs from the leaderBoard
         PlayBoards.forEach(playBoard => leaderBoard.removeChild(playBoard));

        // Add the sorted playBoard divs back to the leaderBoard
         PlayBoards.forEach(playBoard => leaderBoard.appendChild(playBoard));

        })
        minus5.addEventListener('click', () => {
            score.textContent = parseInt(score.textContent) - 5
            // Sort the playBoard divs based on the score (assuming score is a numerical value)
            PlayBoards.sort((a, b) => {
                const scoreA = parseInt(a.querySelector('.score').textContent);
                const scoreB = parseInt(b.querySelector('.score').textContent);
                return scoreB - scoreA; // Sort in descending order of scores
            });

            // Remove all existing playBoard divs from the leaderBoard
             PlayBoards.forEach(playBoard => leaderBoard.removeChild(playBoard));

            // Add the sorted playBoard divs back to the leaderBoard
             PlayBoards.forEach(playBoard => leaderBoard.appendChild(playBoard));
        })
    })
})

subButton.addEventListener('blur', () => {
    firstName.value = ''
    lastName.value = ''
    country.value = ''
    scores.value = ''
    PlayBoards.sort((a, b) => {
        const scoreA = parseInt(a.querySelector('.score').textContent);
        const scoreB = parseInt(b.querySelector('.score').textContent);
        return scoreB - scoreA; // Sort in descending order of scores
    })
    // Remove all existing playBoard divs from the leaderBoard
    PlayBoards.forEach(playBoard => leaderBoard.removeChild(playBoard));

    // Add the sorted playBoard divs back to the leaderBoard
    PlayBoards.forEach(playBoard => leaderBoard.appendChild(playBoard));
})
