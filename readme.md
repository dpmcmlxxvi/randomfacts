# ![Random][icon] ![Facts][logo]

[![build](https://travis-ci.org/dpmcmlxxvi/randomfacts.svg?branch=master)](https://travis-ci.org/dpmcmlxxvi/randomfacts)
[![coverage](https://img.shields.io/coveralls/dpmcmlxxvi/randomfacts.svg)](https://coveralls.io/r/dpmcmlxxvi/randomfacts?branch=master)
[![npm](https://badge.fury.io/js/%40dpmcmlxxvi%2Frandomfacts.svg)](https://badge.fury.io/js/%40dpmcmlxxvi%2Frandomfacts)
[![Greenkeeper badge](https://badges.greenkeeper.io/dpmcmlxxvi/randomfacts.svg)](https://greenkeeper.io/)

[`randomfacts`][randomfacts-github] is a [Node][node-site] package that generates
random facts about people given a list of their names. Inspired by [Sentencer]
and [txtgen]. A website to generate random facts is available
online [here][randomfacts-site].

## GETTING STARTED

The [`randomfacts`][randomfacts-npm] library is available as browser script and
a Node package.

#### In a browser

```html
<script src="randomfacts.js" charset="utf-8"></script>
<script>
  const fact = randomfacts.make('Shaggy');
  // returns a string like "Shaggy believes aliens come from Mozambique."
</script>
```

A sample website can be found in the `web` directory.

#### In Node

```javascript
npm install @dpmcmlxxvi/randomfacts
const randomfacts = require('@dpmcmlxxvi/randomfacts');
const fact = randomfacts.make('Scrapy-Doo');
// returns a string like "Scrappy-Doo punched a clown somewhere in Germany."
```

## USAGE

#### API

The `randomfacts` object has the following methods:

 - `configure(options)`

   Configures an existing `randomfacts` instance.

 - `create(options)`

   Creates a new `randomfacts` instance configured with the given options.

 - `make(name)`

   Generate a new random fact for the given `name`.

The library can be configured using the same options available by the [Sentencer]
library and with the following additional options

```javascript
options = {
  // the list of sentence templates in the format specified by Sentener.
  // "randomfacts" provides a default if not provded. The action "{{name}}"
  // should be included to insert a name into the generated fact.
  templates: [],

  // The rate at which introductory phrases (e.g., "In recent years, ") are
  // randomly prepended to the generated fact.
  phraseRate: <number>,
};
```

## BUILD

To build and test the library locally:

    npm install
    npm test

The browser script is bundled in

    ./web/js/randomfacts.js

After running the tests a coverage report is availalbe in the `coverage`
directory.

## LICENSE

Copyright (c) 2019 Daniel Pulido <dpmcmlxxvi@gmail.com>

Source code is released under the [MIT License](http://opensource.org/licenses/MIT).

[icon]: https://dpmcmlxxvi.github.io/randomfacts/img/icon.png
[logo]: https://dpmcmlxxvi.github.io/randomfacts/img/logo-black.png
[node-site]: https://nodejs.org
[randomfacts-github]: https://github.com/dpmcmlxxvi/randomfacts
[randomfacts-npm]: https://www.npmjs.com/package/@dpmcmlxxvi/randomfacts
[randomfacts-site]: http://dpmcmlxxvi.github.io/randomfacts
[Sentencer]: https://github.com/kylestetz/Sentencer
[txtgen]: https://github.com/ndaidong/txtgen
