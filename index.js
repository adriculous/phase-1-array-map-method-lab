const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  const tutTitles = tutorials.map((wordsInTitles) => {
    const tutTitlesList = wordsInTitles
      .split(" ")
      .map((wordies) => {
        return wordies.charAt(0).toUpperCase() + wordies.slice(1);
      })
      .join(" ");
    return tutTitlesList;
  });
  return tutTitles;
};

// freeCodeCamp: How to Capitalize Words in JavaScript? (https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/)

// charAt() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
