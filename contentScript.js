const elements = document.getElementsByTagName('*');
const vowels = ['a', 'e', 'i', 'o', 'u']

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/[aeiou]/gi, 'ann');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
/** 
const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')
const vowels = ['a', 'e', 'i', 'o', 'u']

for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        let vowel = vowels[j]
        if (text[i].innerHTML.toLowerCase.includes(vowel)) {
            text[i].innerHTML = text[i].innerHTML.replace(vowel, 'ann');
        }
    }
}
**/