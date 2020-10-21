document.addEventListener('DOMContentLoaded', () => {
    const gameBaseUrl = "http://localhost:3000/api/v1/games/"
    const wordBaseUrl = "http://localhost:3000/api/v1/words/"
    let allPhrases = []

    let answer = ' ';
    let wrongLimit = 6;
    let currentMistakes = 0;
    let guessedLetters = [];

    const fetchWords = () => {
        //fetches from the back end
        fetch(wordBaseUrl)
        //turns into json format
        .then(resp => resp.json())
        //passes words to new function
        .then(words => makeGame(words));
    }

        const makeGame = (words) => {
            allPhrases = words
            const guessPhrase = document.querySelector('#guessPhrase')
            const randomElement = allPhrase[Math.floor(Math.random() * allPhrases.length)]
            //generate a random phrase from the array
            //determine length of word to populate letter total on screen
            //render "_" for each character onto the DOM
        
        }


   
    // let buttons = () => {
    //     myButtons = document.getElementById('letterKey');
    //     letters = document.createElement('ul');

    //     for (let i = 0; i < allLetters.length; i++) {
    //     // let alphabet = letters.id
    //     const allLettersLi = document.createElement('li');
    //     allLettersLi.classList.add = 'bet'
    //         allLettersLi.textContent = allLetters[i];
            
    //         myButtons.appendChild(letters);
    //         letters.appendChild(allLettersLi)

    //     }   
        
    // }



fetchWords();
})


