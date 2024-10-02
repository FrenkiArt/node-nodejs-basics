import fs from "fs";
import path from "path";
import throwError from "./throw_error.js";
import throwSuccess from "./throw_success.js";

/* 
TODO: 
read.js - implement function that prints content of the fileToRead.txt 
into console (if there's no file fileToRead.txt Error with message 
FS operation failed must be thrown)
*/

const dto = {
  targetFileName: "fileToRead.txt",
  targetDirName: "files",
  currentDirPath: path.join(import.meta.dirname),
  filePath: path.join(import.meta.dirname, "files", "fileToRead.txt"),
};

const read = async () => {
  fs.access(dto.filePath, fs.constants.F_OK, targetAccessHandler);
};

const targetAccessHandler = (err) => {
  if (err) throwError();

  fs.readFile(dto.filePath, "utf8", targetReadHandler);
};

const targetReadHandler = (err, data) => {
  if (err) throwError(err);

  throwSuccess("всё  чики пуки, выводим содержимое файла...");
  console.log(data);
};

await read();
