import fs from "fs";
import path from "path";

/* 
TODO:
read.js - implement function that reads file fileToRead.txt 
content using Readable Stream and prints it's content into 
process.stdout
*/

const read = async () => {
  //process.stdout.setEncoding("utf8");
  const targetPath = path.join(import.meta.dirname, "files", "fileToRead.txt");
  const readableStream = fs.createReadStream(targetPath);

  readableStream.on("data", (chunk) => {
    process.stdout.write(chunk.toString());

    //console.log(chunk.toString());
  });

  // не понятно, если прописать "node .\src\streams\read.js",
  // то выведет в консоль

  //readableStream.pipe(process.stdout);
};

await read();
