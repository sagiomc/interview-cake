const text = 'Hola que tal, bienvenidos a GitHub. Si les está gustando este repo, piquenle al botón de fav fav fav';

function normalize (word) {
  return word.toLowerCase().replace(/[.!,]/g , "");
}

function wordCount (sentence) {
  let dictionary = {};
  let splitInWords = sentence.split(' ');
  for (let word of splitInWords) {
    let currentNormalizeWord = normalize(word);
    if (currentNormalizeWord in dictionary) {
      ++dictionary[currentNormalizeWord];
    } else {
      dictionary[currentNormalizeWord] = 1;
    }
  }

  return dictionary;
}

console.log(wordCount(text));
