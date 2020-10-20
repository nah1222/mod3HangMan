document.addEventListener('DOMContentLoaded', () => {
    const gameBaseUrl = "http://loacalhost:3000/api/v1/games/"
    const wordBaseUrl = "http://loacalhost:3000/api/v1/words/"

    // const fetchGames = () => {
    //     fetch(gameBaseUrl)
    //     .then(response => response.json())
    //     .then(games => renderGames(games));
    // }

    const fetchWords = () => {
        fetch(wordBaseUrl)
        .then(resp => resp.json())
        .then (words => renderWords(words));
    }

    const renderWords = (words) => {
        for(const word of words) {
            renderWord(word)
        }
    }

    const renderWord = (word) => {




    }


})