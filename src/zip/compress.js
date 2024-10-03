import { pipeline } from "stream";
import { createGzip } from "zlib";
import path from "path";
import fs from "fs";

/* 
TODO:
compress.js - implement function that compresses file 
fileToCompress.txt to archive.gz using zlib and Streams API
*/

// https://nodejs.org/api/zlib.html

const compress = async () => {
  const targetPath = path.join(
    import.meta.dirname,
    "files",
    "fileToCompress.txt"
  );
  const destPath = path.join(import.meta.dirname, "files", "archive.gz");
  const gzip = createGzip();
  const source = fs.createReadStream(targetPath);
  const destination = fs.createWriteStream(destPath);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
