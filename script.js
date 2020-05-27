let phrases = [
    { text: "decide it's finally time to do a workout", link: 'images/sport.png' },
    { text: "figure out the real meaning of rap songs", link: 'images/rap.png' },
    { text: "check old photos on social", link: 'images/social.png' },
    { text: "arrange your books by color", link: 'images/sport.png' },
    { text: "listen to sad songs and relive the mistakes of your youth", link: 'images/rap.png' },
    { text: "watch some Jimmy Kimmel", link: 'images/social.png' },
];

let button = document.querySelector('.button');
let advice = document.querySelector('.advice');
let phrase = document.querySelector('.phrase');
let image = document.querySelector('.image');

let prev = 0;

function getNextElement(arr) {
    const getRandom = () => Math.floor(Math.random() * Math.floor(phrases.length));
    let curr = getRandom();
    if (curr !== prev) { // making sure elements do not repeat
        prev = curr;
        return arr[curr];
    }
    if (prev === arr.length -1) {
        prev--;
        return arr[prev];
    }
    prev++;
    return arr[prev];
}

function newSuggestion () {
    let randomElement = getNextElement(phrases);

    if (randomElement.text.length > 24) {
        advice.style.fontSize = '42px';
    } else {
        advice.style.fontSize = '50px';
    }

    changeSmoothly(phrase, randomElement.text);
    changeSmoothly(image, randomElement.link);
}

window.addEventListener('load', newSuggestion);
button.addEventListener('click', newSuggestion);

// for (let i = 0; i <= 2; i += 1) {
//     changeSmoothly(phrase, phrases[i].text);
//     changeSmoothly(image, phrases[i].link);
// }
