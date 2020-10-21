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
        //takes in the words in a readible format. Iterates through each word
            for(const word in words){
            //passes word along to new function
                addToArray(word)
            }
        }

        const addToArray = (word) => {
            //adds the word to the allPhrases array
            //we want to be able to call 1 specific word every time a game begins
            allPhrases.push(words)
        }
        return allPhrases
    

    // const fetchWords = () => {
    //     fetch(wordBaseUrl)
    //     .then(resp => resp.json())
    //     .then (words => {
    //         phrases = words
    //         makeGame()
    //         // call a function that gets a random phrase from the phrases array 
    //         // and renders it as a hangman game
    //     });
    // }
   
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

    // const fetchGames = () => {
    //     fetch(gameBaseUrl)
    //     .then(resp => resp.json())
    //     .then(games => renderGames(games));
    // }

    // const renderWords = (words) => {
    //     for(const word of words) {
    //         renderWord(word)
    //     }
    // }

    // const renderWord = (word) => {
        
    //     const wordDiv = document.createElement('div')
    //     wordDiv.dataset.id = word.id
    //     wordDiv.innerHTML = `
    //     <h3> ${word.phrase} </h3>
    //     `
    //     document.body.appendChild(wordDiv)
    // }

fetchWords();
})


