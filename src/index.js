document.addEventListener('DOMContentLoaded', () => {
    const gameBaseUrl = "http://localhost:3000/api/v1/games/"
    const wordBaseUrl = "http://localhost:3000/api/v1/words/"
    let phrases

//     // const fetchGames = () => {
//     //     fetch(gameBaseUrl)
//     //     .then(response => response.json())
//     //     .then(games => renderGames(games));
//     // }

    const fetchWords = () => {
        fetch(wordBaseUrl)
        .then(resp => resp.json())
        .then (words => {
            phrases = words
            makeGame()
            // call a function that gets a random phrase from the phrases array 
            // and renders it as a hangman game
        });
    }

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



// fetchWords();
    
})