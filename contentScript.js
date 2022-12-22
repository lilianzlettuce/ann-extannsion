const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

/*
for (let i = 0; i < text.length; i++) {
    text[i].innerHTML = text[i].innerHTML.replace(/[aeiou]/gi, 'ann')
}

for (let i = 0; i < text.length; i++) {
    text[i].innerHTML = 'Never gonna give you up'
}**/

for (let i = 0; i < text.length; i++) {
    text[i].innerHTML = text[i].innerHTML.replace(/(?<= is | was )(.*)(?=(.|,))/gi, 'never gonna give you up')
    text[i].innerHTML = text[i].innerHTML.replace(/(?<= to )(.*)(?=(.|,))/gi, 'never let you down')
    text[i].innerHTML = text[i].innerHTML.replace(/(?<= of )(.*)(?=(.|,))/gi, 'never running around and deserting you')
}

const images = document.querySelectorAll('img')
for (let i = 0; i < images.length; i++) {
    images[i].src = 'https://pbs.twimg.com/profile_images/1326707048478892033/Ln0v50LP_400x400.jpg'
}