/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    this.chains = (this.words).reduce((pairs, word, index, array) => {
      const nextWord = array[index + 1] || null;
      pairs[word] = pairs[word] || [];
      pairs[word].push(nextWord);
      return pairs;
  }, {});
    return this.chains
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let keysArray = Object.keys(this.chains)
    let key = keysArray[(Math.floor(Math.random() * keysArray.length))]
    let output = []

    while(output.length < numWords && key !== null){
      output.push(key)
      const newChoice = this.chains[key]
      key = newChoice[Math.floor(Math.random() * newChoice.length)]
    }

    return output.join(" ")
  }
}

module.exports = MarkovMachine;