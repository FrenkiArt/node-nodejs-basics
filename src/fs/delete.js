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
  filePath: path.join(import.meta.dirname, "files", "fileToRemove.txt"),
};

const remove = async () => {
  // проверка на существование файла fileToRemove.txt
  fs.access(dto.filePath, fs.constants.F_OK, targetFileRemoveHandler);
};

const targetFileRemoveHandler = (err) => {
  if (err) throwError();

  fs.unlink(dto.filePath, (err) => {
    if (err) {
      console.error(`О повелитель, случилась чуудовищная ОШИБКА!`, err);
    } else {
      throwSuccess("всё  чики пуки, файл удалён...");
    }
  });
};

await remove();
