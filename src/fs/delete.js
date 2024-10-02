import fs from "fs";
import path from "path";
import throwError from "./throw_error.js";
import throwSuccess from "./throw_success.js";

/* 
TODO: 
delete.js - implement function that deletes file fileToRemove.txt 
(if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
*/

const dto = {
  targetFileName: "fileToRemove.txt",
  targetDirName: "files",
  currentDirPath: path.join(import.meta.dirname),
};

const remove = async () => {
  // проверка на существование файла fileToRemove.txt
  fs.access(
    path.join(dto.currentDirPath, dto.targetDirName, dto.targetFileName),
    fs.constants.F_OK,
    targetFileRemoveHandler
  );
};

const targetFileRemoveHandler = (err) => {
  fs.unlink(
    path.join(dto.currentDirPath, dto.targetDirName, dto.targetFileName),
    (err) => {
      if (err) {
        throwError();
      } else {
        throwSuccess("всё  чики пуки, файл удалён...");
      }
    }
  );
};

await remove();
