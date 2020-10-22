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
    let abcs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


    const fetchWords = () => {
        //fetches from the back end
        fetch(wordBaseUrl)
        //turns into json format
        .then(resp => resp.json())
        //passes words to new function
        .then(words => makeGame(words));
    }

    //api into array
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
            
            //generate random word
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
    
    //renders letter buttons
    let keys = () => {
        const keyboard = document.getElementById('keyboard');
        const keyboardUl = document.createElement('ul');
        for (var i = 0; i < abcs.length; i++) {
            keyboardUl.dataset.keyboardId = 'letters';
            const key = document.createElement('li');
            key.id = "letter";
            key.innerHTML = abcs[i]
            // check();
            keyboard.appendChild(keyboardUl);
            keyboardUl.appendChild(key);
        }
    }
    
    
    //displays lives
    const livesLeft = () => {
        const bodyParts = document.querySelector('#bodyParts');
        bodyParts.innerHTML = `You have ${wrongLimit} lives left!`;
        if (wrongLimit < 1) {
            bodyParts.innerHTML = "Game Over";
        }
        for(var i = 0; i < guessedLetters.length; i++ ){
            if (counter + space === guessedLetters.length){
                bodyParts.innerHTML = "You Win!";
            }
        }
    }

    const randomPhrase = () => {
        answerWord = answer.split(' ').map(letter => (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join(' ');
        document.getElementById('hiddenAnswer').innerHTML = wordStat;
    }
    document.getElementById('incorrect').innerHTML = wrongLimit;

fetchWords();
//randomWord();
keys()
livesLeft()
})


