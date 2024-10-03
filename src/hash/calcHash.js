import stream from "stream";
import { createHmac } from "crypto";
import path from "path";
import fs from "fs";

/* 
TODO:
calcHash.js - implement function that calculates SHA256 hash 
for file fileToCalculateHashFor.txt and logs it into console 
as hex using Streams API
*/

class hashTransform extends stream.Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    this.push(createHmac("sha256", secret).update(chunk).digest("hex"));

    if (callback) callback();
  }
}

// взято из документации https://nodejs.org/api/crypto.html
const secret = "abcdefg";

const calculateHash = async () => {
  const targetPath = path.join(
    import.meta.dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );

  const readableStream = fs.createReadStream(targetPath);
  const hashStream = new hashTransform();

  readableStream.setEncoding("utf8");

  readableStream.pipe(hashStream).pipe(process.stdout);

  // не понимаю, вот так работает node .\src\hash\calcHash.js
  // при написании npm run hash , на сегудну показывает и скрывает
};

await calculateHash();
