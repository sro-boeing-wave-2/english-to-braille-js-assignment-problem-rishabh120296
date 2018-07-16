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
  const englishToBrailleLiteral = new Map(englishToBrailleLiteralSet);
  const splitString1 = splitString.map(xyz => englishToBrailleLiteral.get(xyz));
  document.getElementById('targetLangText').innerHTML = splitString1.join('');
}

document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convert);
