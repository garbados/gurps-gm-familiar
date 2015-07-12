# Familiar

[![Build Status](https://travis-ci.org/garbados/gurps-gm-familiar.svg?branch=master)](https://travis-ci.org/garbados/gurps-gm-familiar)

**THIS PROJECT IS UNDER CONSTRUCTION. IT WILL NOT YET WORK AS DESCRIBED.**

An assistant for Game Masters of GURPS games, built with [PouchDB](http://pouchdb.com/).

## Use in your browser

Just check out our [demo](https://garbados.github.io/gurps-gm-familiar). Any data you enter in it is stored in your browser, so you can come back later and see the characters, settings, locations, and campaign notes you've made.

## Use in the command line

To install `familiar` as a command-line utility, you'll need [npm](https://www.npmjs.com/), which comes with [node.js](https://nodejs.org/). Then:

```shell
npm install -g familiar
```

If that doesn't work, you may need to try `sudo npm install -g familiar`

Type `familiar --help` for some documentation on commands.

## Features

* Create and save characters and templates
* Design locations, and manage individual entities within it
* Craft whole settings, with history, documents, notes, and images
* Take notes and get calculation help before and during campaigns

## Tests

```shell
git clone https://github.com/garbados/gurps-gm-familiar.git
cd gurps-gm-familiar
npm install
npm test
```

## License

[ISC](http://opensource.org/licenses/ISC), yo.