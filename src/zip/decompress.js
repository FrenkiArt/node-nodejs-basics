import { pipeline } from "stream";
import { createGunzip } from "zlib";
import path from "path";
import fs from "fs";

/*
TODO:
decompress.js - implement function that decompresses archive.gz
back to the fileToCompress.txt with same content as before
compression using zlib and Streams API
*/

// https://nodejs.org/api/zlib.html
// https://nodejs.org/api/zlib.html#zlibcreategunzipoptions

const decompress = async () => {
  const destPath = path.join(
    import.meta.dirname,
    "files",
    "fileToCompress.txt"
  );
  const targetPath = path.join(import.meta.dirname, "files", "archive.gz");
  const gunzip = createGunzip();
  const source = fs.createReadStream(targetPath);
  const destination = fs.createWriteStream(destPath);

  pipeline(source, gunzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await decompress();
