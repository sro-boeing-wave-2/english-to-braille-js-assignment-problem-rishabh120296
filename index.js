import englishToBrailleLiteralSet from './english-to-braille.js';

/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
function convert() {
  const inputText = document.getElementById('sourceLangText').value;
  const splitString = inputText.split('');
  let i;
  const englishToBrailleLiteral = new Map(englishToBrailleLiteralSet);
  for (i = 0; i < splitString.length; i += 1) {
    splitString[i] = englishToBrailleLiteral.get(splitString[i]);
  }
  document.getElementById('targetLangText').innerHTML = splitString.join('');
}
window.onload = function () {
  document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convert);
};
