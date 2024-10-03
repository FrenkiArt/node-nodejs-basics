import fs from "fs";
import path from "path";

/* 
TODO:
write.js - implement function that writes process.stdin 
data into file fileToWrite.txt content using Writable Stream
*/

const write = async () => {
  const targetPath = path.join(import.meta.dirname, "files", "fileToWrite.txt");

  const writeableStream = fs.createWriteStream(targetPath);

  /* process.stdin.on("data", (chunk) => {
    writeableStream.write(chunk);

    if (chunk.includes("stop") || chunk.includes("стоп")) {
      writeableStream.end();
      process.exit();
    }
  }); */

  process.stdin.pipe(writeableStream);
  // встаёт вопрос, а как закрыть поток в случае передачи через pipe?
};

await write();
