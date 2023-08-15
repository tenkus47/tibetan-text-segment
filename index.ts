function makeSegment(text: string, start: number) {
  return {
    text: text,
    start: start,
    length: text.length,
  };
}

function segmentTibetanText(text: string) {
  const breaks = "༄༅།";
  const spaces = " ་";
  const newline = "\n";

  let segments: { text: string; start: number; length: number }[] = [];
  let currentSegment = "";
  let currentStart = 0;
  let inBreak = false;
  let inSpace = false;
  let count = 0;

  function processCurrentSegment() {
    if (count > 0) {
      const newSegment = makeSegment(currentSegment, currentStart);
      segments.push(newSegment);
      currentSegment = "";
      inBreak = false;
      inSpace = false;
    }
  }

  for (let char of text) {
    if (char === newline) {
      processCurrentSegment();
      currentSegment = char;
      currentStart = count + 1; // Move to the next character after the newline
    } else if (breaks.includes(char)) {
      if (inBreak) {
        currentSegment += char;
      } else {
        processCurrentSegment();
        inBreak = true;
        currentSegment = char;
        currentStart = count;
      }
    } else if (spaces.includes(char)) {
      if (inSpace) {
        currentSegment += char;
      } else {
        processCurrentSegment();
        inSpace = true;
        currentSegment = char;
        currentStart = count;
      }
    } else {
      if (inSpace || inBreak) {
        processCurrentSegment();
        currentSegment = char;
        currentStart = count;
      } else {
        currentSegment += char;
      }
    }

    count++;
  }

  if (currentSegment) {
    const newSegment = makeSegment(currentSegment, currentStart);
    segments.push(newSegment);
  }
  return segments;
}

function splitText(text: string) {
  let segment = segmentTibetanText(text);
  let data = segment.map((item) => item.text);
  let finalItem: string[] = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].startsWith("\n")) {
      let temp = data[i].split("\n");
      finalItem.push("\n");
      finalItem.push(temp[1]);
    } else if (data[i + 1] === "་") {
      if (data[i + 2] === "།" && data[i + 3] === " " && data[i + 4] === "།") {
        let temp =
          data[i] + data[i + 1] + data[i + 2] + data[i + 3] + data[i + 4];
        finalItem.push(temp);
        i = i + 4;
      } else if (
        data[i + 2] === "།" &&
        data[i + 3] === " " &&
        data[i + 4] !== "།"
      ) {
        let temp = data[i] + data[i + 1] + data[i + 2] + data[i + 3];
        finalItem.push(temp);
        i = i + 3;
      } else if (data[i + 2] === " ") {
        finalItem.push(data[i] + "་ ");
        i = i + 2;
      } else {
        finalItem.push(data[i] + "་");
        i++;
      }
    } else if (data[i + 1] === "་ ") {
      if (data[i + 2] === "།" && data[i + 3] === " " && data[i + 4] === "།") {
        let temp =
          data[i] + data[i + 1] + data[i + 2] + data[i + 3] + data[i + 4];
        finalItem.push(temp);
        i = i + 4;
      } else if (
        data[i + 2] === "།" &&
        data[i + 3] === " " &&
        data[i + 4] !== "།"
      ) {
        let temp = data[i] + data[i + 1] + data[i + 2] + data[i + 3];
        finalItem.push(temp);
        i = i + 3;
      } else {
        finalItem.push(data[i] + data[i + 1]);
        i++;
      }
    } else if (data[i + 1] === "།") {
      if (data[i + 2] === " " && data[i + 3] === "།") {
        let temp = data[i] + data[i + 1] + data[i + 2] + data[i + 3];
        finalItem.push(temp);
        i = i + 3;
      } else if (data[i + 2] === " " && data[i + 3] === "\n") {
        let temp = data[i] + data[i + 1] + " " + "\n";
        finalItem.push(temp);
        i = i + 3;
      } else if (data[i + 2] === " " && data[i + 3] !== "།") {
        let temp = data[i] + data[i + 1] + " ";
        finalItem.push(temp);
        i = i + 2;
      }
    } else if (data[i + 1] === " ") {
      if (data[i + 2] === "།") {
        let temp = data[i] + data[i + 1] + data[i + 2];
        finalItem.push(temp);
        i = i + 2;
      } else {
        finalItem.push(data[i] + data[i + 1]);
        i++;
      }
    } else {
      if (data[i].endsWith("།") && data[i + 1] === " " && data[i + 2] === "།") {
        let temp = data[i] + data[i + 1] + data[i + 2];
        finalItem.push(temp);
        i = i + 2;
      } else if (
        data[i].endsWith("།") &&
        data[i + 1] === " " &&
        data[i + 2] !== "།"
      ) {
        let temp = data[i] + data[i + 1];
        finalItem.push(temp);
        i = i + 1;
      } else {
        finalItem.push(data[i]);
      }
    }
  }
  let count = 0;
  return finalItem.map((item) => {
    let data = { char: item, start: count };
    count += item.length;
    return data;
  });
}

export { splitText, segmentTibetanText };
