const text = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, caption, span, a')
const text1 = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, caption, cite, a')
const text2 = document.querySelectorAll('li, td, span, a')
/** 
// pure annlatin
for (let i = 0; i < text1.length; i++) {
    text1[i].innerHTML = text1[i].innerHTML.replace(/[aeiou]/gi, 'ann')
}
for (let i = 0; i < text2.length; i++) {
    text2[i].innerText = text2[i].innerText.replace(/[aeiou]/gi, 'ann')
}

const links = document.querySelectorAll('a')
for (let i = 0; i < links.length; i++) {
    links[i].href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
}

*/

// rickify 
for (let i = 0; i < text.length; i++) {
    text[i].innerHTML = text[i].innerText.replace(/(?<=you )(.*)(?=(.|,))/gi, 'know the rules and so do I')

    text[i].innerHTML = text[i].innerText.replace(/(?<=never )(.*)(?=(.|,))/gi, 'say goodbye')
    text[i].innerHTML = text[i].innerText.replace(/(?<= is | was )(.*)(?=(.|,))/gi, 'never gonna give you up')
    text[i].innerHTML = text[i].innerText.replace(/(?<= to )(.*)(?=(.|,))/gi, 'never let you down')
    text[i].innerHTML = text[i].innerText.replace(/(?<= of )(.*)(?=(.|,))/gi, 'never running around and deserting you')
    text[i].innerHTML = text[i].innerText.replace(/(?<= that )(.*)(?=(.|,))/gi, 'Rick Astley is never gonna tell a lie and hurt you')

    text[i].innerHTML = text[i].innerText.replace(/we (.*)(?=(.|,))/gi, 'we\'re no strangers to love')
    text[i].innerHTML = text[i].innerText.replace(/(?<=we're )(.*)(?=(.|,))/gi, 'no strangers to love')

    text[i].innerHTML = text[i].innerText.replace(/(?<=we've )(.*)(?=(.|,))/gi, 'known each other for so long')
    text[i].innerHTML = text[i].innerText.replace(/(?<=your )(.*)(?=(.|,))/gi, 'heart\'s been aching, but you\'re too shy to say it')
    text[i].innerHTML = text[i].innerText.replace(/(?<= inside )(.*)(?=(.|,))/gi, 'we both know what\'s been going on')
    text[i].innerHTML = text[i].innerText.replace(/(?<=don't )(.*)(?=(.|,))/gi, 'tell me you\'re too blind to see')

    text[i].innerHTML = text[i].innerText.replace(/(?<= a f)(.*)(?=(.|,))/gi, 'ull commitment\'s what I\'m thinking of')
    text[i].innerHTML = text[i].innerText.replace(/(?<= i )(.*)(?=(.|,))/gi, 'just wanna tell you how I\'m feeling')
    text[i].innerHTML = text[i].innerText.replace(/(?<= got to )(.*)(?=(.|,))/gi, 'make you understand')
}

const images = document.querySelectorAll('img')
for (let i = 0; i < images.length; i++) {
    images[i].src = 'https://pbs.twimg.com/profile_images/1326707048478892033/Ln0v50LP_400x400.jpg'
}