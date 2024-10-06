import stream from "stream";

/* 
TODO:
transform.js - implement function that reads data from process.stdin, 
reverses text using Transform Stream and then writes it 
into process.stdout
*/

class reverseTransform extends stream.Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().split("").reverse().join(""));

    if (callback) callback();
  }
}

const transform = async () => {
  const reverseStream = new reverseTransform();

  process.stdin.pipe(reverseStream).pipe(process.stdout);
  // не очень понятно было, но заработало ахахаха
  // https://www.youtube.com/watch?v=fcYOvXktErI&ab_channel=ITVDN
  // transform в потоках это получается такой middleware
};

await transform();
