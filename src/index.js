document.addEventListener('DOMContentLoaded', () => {
    const gameBaseUrl = "http://localhost:3000/api/v1/games/"
    const wordBaseUrl = "http://localhost:3000/api/v1/words/"

    let phrases = []

    const fetchWords = () => {
        fetch(wordBaseUrl)
        .then(resp => resp.json())
        .then(words => makeGame(words))
    }

    const makeGame = words => {
        for(var i in words){
            phrases.push(i, words, [i])
        }
    }
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

//     // const fetchGames = () => {
//     //     fetch(gameBaseUrl)
//     //     .then(response => response.json())
//     //     .then(games => renderGames(games));
//     // }

//     const renderWords = (words) => {
//         for(const word of words) {
//             renderWord(word)
//         }
//     }

//     const renderWord = (word) => {
        
//         const wordDiv = document.createElement('div')
//         wordDiv.dataset.id = word.id
//         wordDiv.innerHTML = `
//         <h3> ${word.phrase} </h3>
//         `
//         document.body.appendChild(wordDiv)
//     }


fetchWords();

})

