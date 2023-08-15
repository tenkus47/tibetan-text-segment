# JS Library to get segmented-tibetan-text

- HOW TO USE

## Installation

    yarn add @tenkus47/tibetan-segmentor --save
     or
    npm install @tenkus47/tibetan-segmentor --save

```javascript
const { split, segmentTibetanText } = require("@tenkus47/tibetan-segmentor");

let testData = ""; //the text you want to segment

console.log(split(testData));
```

the output should be similar to :

```javascript
[
  { char: "སྒྲ་", start: 0 },
  { char: "བསྒྱུར་", start: 4 },
  { char: "མར་", start: 11 },
  { char: "པ་", start: 14 },
]; //etc
```

feel free to send PR!

owner : [tenzin kunsang]("https://github.com/tenkus47")
