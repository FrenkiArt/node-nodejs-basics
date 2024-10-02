import fs from "fs";
import path from "path";
import throwError from "./throw_error.js";
import throwSuccess from "./throw_success.js";

/* 
TODO: 
rename.js - implement function that renames file wrongFilename.txt 
to properFilename with extension .md 
(if there's no file wrongFilename.txt or properFilename.md 
already exists Error with message FS operation failed must be thrown)
*/

const dto = {
  targetFileName: "wrongFilename.txt",
  properFileName: "properFilename.md",
  targetDirName: "files",
  currentDirPath: path.join(import.meta.dirname),
};
const rename = async () => {
  // проверка на существование файла wrongFilename.txt
  fs.access(
    path.join(dto.currentDirPath, dto.targetDirName, dto.targetFileName),
    fs.constants.F_OK,
    targetFileNameHandler
  );
};

const targetFileNameHandler = (err) => {
  if (err) throwError();

  fs.access(
    path.join(dto.currentDirPath, dto.targetDirName, dto.properFileName),
    fs.constants.F_OK,
    properFileNameHandler
  );
};

const properFileNameHandler = (err) => {
  if (!err) throwError();

  makeRename();
};

const makeRename = () => {
  fs.rename(
    path.join(dto.currentDirPath, dto.targetDirName, dto.targetFileName),
    path.join(dto.currentDirPath, dto.targetDirName, dto.properFileName),
    (err) => {
      if (err) throwError();
      throwSuccess("всё  чики пуки, файл переименован...");
    }
  );
};

await rename();
