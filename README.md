# Dec2radix 

A Node.js library which you can use to get the sum of two numbers of any size.

## Install

With npm:

```
npm i @rasta-alex/bigNumbers
```
## Usage  

```javascript
const bigNumbers = require('@rasta-alex/bigNumbers');

const number = bigNumbers('123', '321'); // '444';

const bigNum = bigNumbers(Array(100).fill('1'), Array(100).fill('2')); 
// Array(100).fill('3').join('').toString()
```

## License

MIT