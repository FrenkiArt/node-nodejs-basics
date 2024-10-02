import fs from "fs";
import path from "path";

const read = async () => {
  const targetPath = path.join(import.meta.dirname, "files", "fileToRead.txt");
  const readableStream = fs.createReadStream(targetPath);

  readableStream.on("data", (chunk) => {
    console.log(chunk.toString());
  });
};

await read();
