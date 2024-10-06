import fs from "fs";
import path from "path";
import throwError from "./throw_error.js";
import throwSuccess from "./throw_success.js";

/* 
TODO: 
list.js - implement function that prints all array of filenames 
from files folder into console (if files folder doesn't exists 
Error with message FS operation failed must be thrown)
*/

const dto = {
  targetDirName: "files",
  currentDirPath: path.join(import.meta.dirname),
  filePath: path.join(import.meta.dirname, "files"),
};

const list = async () => {
  await fs.access(dto.filePath, fs.constants.F_OK, (err) => {
    if (err) throwError();

    fs.readdir(dto.filePath, (err, files) => {
      if (err) throwError(err);

      throwSuccess("всё чики пуки, выводим наименования файлов...");

      files.forEach((file) => {
        console.log(file);
      });
    });
  });
};

await list();
