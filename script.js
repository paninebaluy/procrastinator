let phrases = [
    { text: "think about buying a gym membership", link: 'images/sport.png' },
    { text: "deconstruct the lyrics of your favorite rap song", link: 'images/rap.png' },
    { text: "check old photos on social", link: 'images/social.png' },
    { text: "arrange your books by color", link: 'images/sport.png' },
    { text: "listen to sad songs and relive the mistakes of your youth", link: 'images/rap.png' },
    { text: "watch some Jimmy Kimmel", link: 'images/social.png' },
    { text: "work out the number of days left until summer", link: 'images/sport.png' },
    { text: "watch the trailer for a TV show and then the whole first season for bonus points ", link: 'images/rap.png' },
    { text: "read the news online and argue with people in the comments section", link: 'images/social.png' },
    { text: "go grocery shopping", link: 'images/sport.png' },
    { text: "stare out the window and think about life", link: 'images/rap.png' },
    { text: "search for cheap airline tickets", link: 'images/social.png' },
    { text: "free up space on your phone", link: 'images/sport.png' },
    { text: "call your mom to ask how she's doing", link: 'images/rap.png' },
    { text: "consider launching your own podcast", link: 'images/social.png' },
    { text: "organize your sock drawer", link: 'images/sport.png' },
    { text: "consider taking a Data Science course", link: 'images/rap.png' },
    { text: "download your personal information from Google", link: 'images/social.png' },
    { text: "think of smart responses to an argument you had last year", link: 'images/sport.png' },
    { text: "read the latest discussions on your favorite subreddits", link: 'images/rap.png' },
    { text: "send a friend a funny gif", link: 'images/social.png' },
    { text: "calculate your future salary at Facebook", link: 'images/sport.png' },
    { text: "watch your plants grow", link: 'images/rap.png' },
    { text: "read about the benefits of meditation", link: 'images/social.png' },
];

let button = document.querySelector('.button');
let advice = document.querySelector('.advice');
let phrase = document.querySelector('.phrase');
let image = document.querySelector('.image');

let current = Math.floor(Math.random() * Math.floor(phrases.length)); // random first element

function getNextElement(arr) { // sequential next elements
    const el = arr[current++];
    if (current === arr.length) current = 0;
    return el;
}

function newSuggestion () {
    const nextElement = getNextElement(phrases);

    if (nextElement.text.length > 24) {
        advice.style.fontSize = '42px';
    } else {
        advice.style.fontSize = '50px';
    }

    changeSmoothly(phrase, nextElement.text);
    changeSmoothly(image, nextElement.link);
}

document.addEventListener('DOMContentLoaded', newSuggestion);
button.addEventListener('click', newSuggestion);
