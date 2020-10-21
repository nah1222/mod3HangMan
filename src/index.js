document.addEventListener('DOMContentLoaded', () => {
    const gameBaseUrl = "http://localhost:3000/api/v1/games/"
    const wordBaseUrl = "http://localhost:3000/api/v1/words/"
    let allPhrases = []

    let randomElement = ' ';
    let wrongLimit = 6;
    let currentMistakes = 0;
    let guessedLetters = [];
    let wordStat = null;
    let phrase = ' ';
    let word1 = '';

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
            randomWord();
            // console.log(allPhrases)
            // const guessPhrase = document.getElementById('guessPhrase')
            // randomElement = allPhrases[Math.floor(Math.random() * allPhrases.length)]
            //generate a random phrase from the array
            //determine length of word to populate letter total on screen
            //render "_" for each character onto the DOM
            // guessPhrase
            // randomElement

        function randomWord() {
            randomElement = allPhrases[Math.floor(Math.random() * allPhrases.length)];
            phrase = randomElement.phrase
            word1 = phrase.split(' ')
        }
    
        const spaces = () => {
            let hidId = document.getElementById('hiddenAnswer')
            for(i = 0; i < word1.length; i++)
            //console.log(word1, word1.length)
                var wordDiv = document.createElement('div')
                wordDiv.textContent = word1
                wordDiv.id = word1[i]
                hidId.append(wordDiv)
                //console.log(word1[i])
        }
        //if I input a key and it matches my divId, change that div's textcontent to the key I submitted  << Guideline for Thursday
            //document.dataset.id = word.id
        spaces();
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

    const randomPhrase = () => {
        answerWord = answer.split(' ').map(letter => (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join(' ');
        document.getElementById('hiddenAnswer').innerHTML = wordStat;
    }
    document.getElementById('incorrect').innerHTML = wrongLimit;

fetchWords();
//randomWord();
})


