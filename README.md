# [Masora](https://github.com/gabrielroubiera/masora)

Masora is a JavaScript library for generating random data, is intended to be used as a test on requests to the database from the REST or RESTful API.

## Installation

You can use [npm](https://www.npmjs.com/) to install it.

```
npm install masorajs --save
```

## Examples

```node
const masora = require('masorajs');

masora.randomNumbers(3); # returns a random 3-digit number.
```