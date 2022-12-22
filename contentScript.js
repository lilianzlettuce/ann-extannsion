/**const elements = document.getElementsByTagName('*');
const vowels = ['a', 'e', 'i', 'o', 'u']

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/a/gi, 'ann');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
} */

const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

/*
for (let i = 0; i < text.length; i++) {
    text[i].innerHTML = text[i].innerHTML.replace(/[aeiou]/gi, 'ann')
}

for (let i = 0; i < text.length; i++) {
    text[i].innerHTML = 'Never gonna give you up'
}**/

for (let i = 0; i < text.length; i++) {
    text[i].innerHTML = text[i].innerHTML.replace(/(?<= is )(.*)(?=(.|,|\\?))/gi, 'never gonna give you up')
    text[i].innerHTML = text[i].innerHTML.replace(/(?<= to )(.*)(?=(.|,|\\?))/gi, 'never let you down')
    text[i].innerHTML = text[i].innerHTML.replace(/(?<= of )(.*)(?=(.|,|\\?))/gi, 'never running around and deserting you')
}