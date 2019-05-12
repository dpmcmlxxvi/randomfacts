const test = require('tape');
const templates = require('../data/templates.json');

// Get random fact at given phrase rate.
const getFact = (rate, templates) => {
  const randomfacts = require('../index.js').create({
    'phraseRate': rate,
    'templates': templates});
  const name = Math.floor(Math.random() * 100).toString(36);
  const fact = randomfacts.make(name);
  return {
    'name': name,
    'fact': fact,
  };
};

test('Random fact generated', (t) => {
  const {name, fact} = getFact(-1);
  t.ok(fact.toLowerCase().includes(name));
  t.end();
});

test('Random fact generated with action', (t) => {
  const {fact} = getFact(1, ['{{action}}']);
  t.notOk(fact.toLowerCase().includes('{{action}}'));
  t.end();
});

test('Random fact generated with address', (t) => {
  const {fact} = getFact(1, ['{{address}}']);
  t.notOk(fact.toLowerCase().includes('{{address}}'));
  t.end();
});

test('Random fact generated with animal', (t) => {
  const {fact} = getFact(1, ['{{animal}}']);
  t.notOk(fact.toLowerCase().includes('{{animal}}'));
  t.end();
});

test('Random fact generated with an_animal', (t) => {
  const {fact} = getFact(1, ['{{an_animal}}']);
  t.notOk(fact.toLowerCase().includes('{{an_animal}}'));
  t.end();
});

test('Random fact generated with boolean', (t) => {
  const {fact} = getFact(1, ['{{boolean}}']);
  t.notOk(fact.toLowerCase().includes('{{boolean}}'));
  t.end();
});

test('Random fact generated with color', (t) => {
  const {fact} = getFact(1, ['{{color}}']);
  t.notOk(fact.toLowerCase().includes('{{color}}'));
  t.end();
});

test('Random fact generated with a_color', (t) => {
  const {fact} = getFact(1, ['{{a_color}}']);
  t.notOk(fact.toLowerCase().includes('{{a_color}}'));
  t.end();
});

test('Random fact generated with cooking', (t) => {
  const {fact} = getFact(1, ['{{cooking}}']);
  t.notOk(fact.toLowerCase().includes('{{cooking}}'));
  t.end();
});

test('Random fact generated with emotions', (t) => {
  const {fact} = getFact(1, ['{{emotions}}']);
  t.notOk(fact.toLowerCase().includes('{{emotions}}'));
  t.end();
});

test('Random fact generated with expense', (t) => {
  const {fact} = getFact(1, ['{{expense}}']);
  t.notOk(fact.toLowerCase().includes('{{expense}}'));
  t.end();
});

test('Random fact generated with food', (t) => {
  const {fact} = getFact(1, ['{{food}}']);
  t.notOk(fact.toLowerCase().includes('{{food}}'));
  t.end();
});

test('Random fact generated with a_food', (t) => {
  const {fact} = getFact(1, ['{{a_food}}']);
  t.notOk(fact.toLowerCase().includes('{{a_food}}'));
  t.end();
});

test('Random fact generated with fullname', (t) => {
  const {fact} = getFact(1, ['{{fullname}}']);
  t.notOk(fact.toLowerCase().includes('{{fullname}}'));
  t.end();
});

test('Random fact generated with location', (t) => {
  const {fact} = getFact(1, ['{{location}}']);
  t.notOk(fact.toLowerCase().includes('{{location}}'));
  t.end();
});

test('Random fact generated with lorem', (t) => {
  const {fact} = getFact(1, ['{{lorem}}']);
  t.notOk(fact.toLowerCase().includes('{{lorem}}'));
  t.end();
});

test('Random fact generated with number', (t) => {
  const {fact} = getFact(1, ['{{number}}']);
  t.notOk(fact.toLowerCase().includes('{{number}}'));
  t.end();
});

test('Random fact generated with phrase', (t) => {
  const {name, fact} = getFact(1);
  t.ok(fact.toLowerCase().includes(name));
  t.end();
});

test('Random fact generated with sport', (t) => {
  const {fact} = getFact(1, ['{{sport}}']);
  t.notOk(fact.toLowerCase().includes('{{sport}}'));
  t.end();
});

test('Random fact generated with transportation', (t) => {
  const {fact} = getFact(1, ['{{transportation}}']);
  t.notOk(fact.toLowerCase().includes('{{transportation}}'));
  t.end();
});

test('Random fact generated with a_transportation', (t) => {
  const {fact} = getFact(1, ['{{a_transportation}}']);
  t.notOk(fact.toLowerCase().includes('{{a_transportation}}'));
  t.end();
});

test.skip('Random fact generated with all fields resolved', (t) => {
  templates.forEach((template) => {
    const {fact} = getFact(1, [template]);
    const match = fact.match(/[{}]/g);
    if (match) {
      t.ok(false, fact + ' includes { or }');
    }
  });
  t.end();
});
