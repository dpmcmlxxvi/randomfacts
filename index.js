const articles = require('articles/lib/Articles.js');
const madlibs = require('./data/madlibs/madlibs.json');
const randy = require('randy');
const wordlists = require('./data/wordlists/wordlists.json');

/**
 * Capitalize text.
 * @param {string} text Text to capitalize.
 * @return {string} Capitalized text.
 */
const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Select random food.
 * @return {string} Random food.
 */
const food = () => {
  const type = randy.choice([
    'cheese',
    'condiments',
    'fast_food',
    'fish',
    'food',
    'fruit',
    'meat',
    'seasonings',
    'spirits',
    'wine',
  ]);
  return randy.choice(wordlists['nouns'][type]);
};

/**
 * Create random fact generator.
 */
class RandomFacts {
  /**
   * RandomFacts constructor.
   */
  constructor() {
    const self = this;
    this._rate = 0.5; // Random phrase selection rate [0, 1].
    this._locations = require('./data/locations.json');
    this._phrases = require('./data/phrases.json');
    this._templates = require('./data/templates.json');
    this._actions = {
      'action': () => {
        return randy.choice(madlibs['action']);
      },
      'address': () => {
        return [
          [
            randy.choice(madlibs['cityPrefix']),
            capitalize(randy.choice(madlibs['lorem'])),
          ].join(' '),
          randy.choice(madlibs['citySuffix']),
        ].join('');
      },
      'animal': () => {
        return randy.choice(madlibs['animal']);
      },
      'an_animal': () => {
        return articles.articlize(randy.choice(madlibs['animal']));
      },
      'boolean': () => {
        return randy.choice(['true', 'false']);
      },
      'color': () => {
        return randy.choice(madlibs['color']);
      },
      'cooking': () => {
        return randy.choice(wordlists['verbs']['cooking']);
      },
      'a_color': () => {
        return articles.articlize(randy.choice(madlibs['color']));
      },
      'emotions': () => {
        return randy.choice(wordlists['adjectives']['emotions']);
      },
      'expense': () => {
        return randy.choice(madlibs['expenseCategory']);
      },
      'food': () => {
        return food();
      },
      'a_food': () => {
        return articles.articlize(food());
      },
      'fullname': () => {
        return [randy.choice(madlibs['namePrefix']),
          randy.choice(madlibs['firstName']),
          randy.choice(madlibs['lastName']),
          randy.choice(madlibs['nameSuffix'])].join(' ');
      },
      'location': () => {
        return randy.choice(self._locations);
      },
      'lorem': () => {
        return randy.choice(madlibs['lorem']);
      },
      'number': () => {
        return Math.floor(Math.random() * 100) + 2;
      },
      'sport': () => {
        return randy.choice(madlibs['sportsgame']);
      },
      'transportation': () => {
        return randy.choice(madlibs['transportation']);
      },
      'a_transportation': () => {
        return articles.articlize(randy.choice(madlibs['transportation']));
      },
    };
    this._sentencer = require('sentencer');
    this.configure({});
  }

  /**
   * Configure generator with given options.
   * @param {object} options RandomFacts options object.
   */
  configure(options) {
    this._rate = options.phraseRate || this._rate;
    this._sentencer.configure({
      actions: options.actions || this._actions,
      adjectiveList: options.adjectiveList,
      nounList: options.nounList,
    });
    this._templates = options.templates || this._templates;
  }

  /**
   * Create new instance of random facts generator.
   * @param {object} options randomfacts options.
   * @return {object} New randomfacts instance.
   */
  create(options) {
    const instance = new RandomFacts();
    instance.configure(options);
    return instance;
  };

  /**
   * Make random fact for given name.
   * @param {string} name Name of person about which to make random fact.
   * @return {string} String of random fact.
   */
  make(name) {
    let template = this._templates[0];
    this._templates.push(this._templates.shift());
    template = template.replace(/{{name}}/g, name);
    const rate = Math.random();
    if (rate <= this._rate) {
      template = randy.choice(this._phrases) + template;
    }
    return capitalize(this._sentencer.make(template)) + '.';
  }
}

module.exports = new RandomFacts();
