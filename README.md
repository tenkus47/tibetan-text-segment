# tibetan-text-segment

- HOW TO USE

```javascript
const split = require("@tenkus47/tibetan-segmentor");

let testData =
  "སྒྲ་བསྒྱུར་མར་པ་ལོ་ཙྪའི་རྣམ་པར་ཐར་པ་མཐོང་བ་དོན་ཡོད་བཞུགས་སོ།།ན་མོ་གུ་རུ་དེ་ཝ་ཌཱ་ཀི་ནི།སྔོན་སྦྱངས་ཐུགས་བསྐྱེད་སྨོན་ལམ་དུས་བབས་ལྷག་བསམ་གྲུ་གཟིངས་ནང་དུ་ལུས་སྲོག་མ་ཆགས་འགྲོ་དོན་སྦྱོར་བ་མཆོག་གིས་རབ་ཞུགས་ནས།།འཕགས་ནོར་མཐུན་རྐྱེན་ཡོ་བྱད་གཡོར་མོ་བརྩོན་འགྲུས་མཐུན་རླུང་གིས་བསྐྱོད་ཕུ་ལ་ཧ་རི་ལ་སོགས་འཕགས་ཡུལ་ཆུ་གཏེར་གླིང་ཕྱིན་ཏེ།།";

console.log(split(testData));
```

the output should be :

```javascript
[
  { char: "སྒྲ་", start: 0 },
  { char: "བསྒྱུར་", start: 4 },
  { char: "མར་", start: 11 },
  { char: "པ་", start: 14 },
  { char: "ལོ་", start: 16 },
  { char: "ཙྪའི་", start: 19 },
  { char: "རྣམ་", start: 24 },
  { char: "པར་", start: 28 },
  { char: "ཐར་", start: 31 },
  { char: "པ་", start: 34 },
  { char: "མཐོང་", start: 36 },
  { char: "བ་", start: 41 },
  { char: "དོན་", start: 43 },
  { char: "ཡོད་", start: 47 },
  { char: "བཞུགས་", start: 51 },
  { char: "སོ", start: 57 },
  { char: "།།", start: 59 },
  { char: "ན་", start: 61 },
  { char: "མོ་", start: 63 },
  { char: "གུ་", start: 66 },
  { char: "རུ་", start: 69 },
  { char: "དེ་", start: 72 },
  { char: "ཝ་", start: 75 },
  { char: "ཌཱ་", start: 77 },
  { char: "ཀི་", start: 80 },
  { char: "།", start: 83 },
  { char: "སྔོན་", start: 84 },
  { char: "སྦྱངས་", start: 89 },
  { char: "ཐུགས་", start: 95 },
  { char: "བསྐྱེད་", start: 100 },
  { char: "སྨོན་", start: 107 },
  { char: "ལམ་", start: 112 },
  { char: "དུས་", start: 115 },
  { char: "བབས་", start: 119 },
  { char: "ལྷག་", start: 123 },
  { char: "བསམ་", start: 127 },
  { char: "གྲུ་", start: 131 },
  { char: "གཟིངས་", start: 135 },
  { char: "ནང་", start: 141 },
  { char: "དུ་", start: 144 },
  { char: "ལུས་", start: 147 },
  { char: "སྲོག་", start: 151 },
  { char: "མ་", start: 156 },
  { char: "ཆགས་", start: 158 },
  { char: "འགྲོ་", start: 162 },
  { char: "དོན་", start: 167 },
  { char: "སྦྱོར་", start: 171 },
  { char: "བ་", start: 177 },
  { char: "མཆོག་", start: 179 },
  { char: "གིས་", start: 184 },
  { char: "རབ་", start: 188 },
  { char: "ཞུགས་", start: 191 },
  { char: "ནས", start: 196 },
  { char: "།།", start: 198 },
  { char: "འཕགས་", start: 200 },
  { char: "ནོར་", start: 205 },
  { char: "མཐུན་", start: 209 },
  { char: "རྐྱེན་", start: 214 },
  { char: "ཡོ་", start: 220 },
  { char: "བྱད་", start: 223 },
  { char: "གཡོར་", start: 227 },
  { char: "མོ་", start: 232 },
  { char: "བརྩོན་", start: 235 },
  { char: "འགྲུས་", start: 241 },
  { char: "མཐུན་", start: 247 },
  { char: "རླུང་", start: 252 },
  { char: "གིས་", start: 257 },
  { char: "བསྐྱོད་", start: 261 },
  { char: "ཕུ་", start: 268 },
  { char: "ལ་", start: 271 },
  { char: "ཧ་", start: 273 },
  { char: "རི་", start: 275 },
  { char: "ལ་", start: 278 },
  { char: "སོགས་", start: 280 },
  { char: "འཕགས་", start: 285 },
  { char: "ཡུལ་", start: 290 },
  { char: "ཆུ་", start: 294 },
  { char: "གཏེར་", start: 297 },
  { char: "གླིང་", start: 302 },
  { char: "ཕྱིན་", start: 307 },
  { char: "ཏེ", start: 312 },
  { char: "།།", start: 314 },
];
```

feel free to send PR!

owner : [tenzin kunsang]("https://github.com/tenkus47")
