import fs from "fs";
import os from "os";
import path from "path";

/* 
TODO:
copy.js - implement function that copies folder files 
files with all its content into folder files_copy 
at the same level (if files folder doesn't exists or files_copy 
has already been created Error with message FS operation failed must be thrown)
*/

const dto = {
  userName: os.userInfo()?.username || "You",
  targetDirName: "files",
  newDirName: "files_copy",
  currentDirPath: path.join(import.meta.dirname),
};

const copy = async () => {
  // Проверяем существование директории "files"
  fs.access(
    path.join(dto.currentDirPath, dto.targetDirName),
    fs.constants.F_OK,
    (err) => {
      if (err) throwError();

      // Избегаем гонки ассинхронных функций
      secondCheck();
    }
  );

  /* // Проверяем существование директории "files_copy"
  fs.access(
    path.join(dto.currentDirPath, dto.newDirName),
    fs.constants.F_OK,
    (err) => {
      if (err) {
        // Папки "files_copy" не существует, копируем.
        console.log(`${dto.userName}, всё  чики пуки, копиуем файлы...`);
        copyToNewDir();
      } else {
        throwError();
      }
    }
  ); */
};

const secondCheck = () => {
  // Проверяем существование директории "files_copy"
  fs.access(
    path.join(dto.currentDirPath, dto.newDirName),
    fs.constants.F_OK,
    (err) => {
      if (err) {
        // Папки "files_copy" не существует, копируем.
        console.log(`${dto.userName}, всё  чики пуки, копиуем файлы...`);
        copyToNewDir();
      } else {
        throwError();
      }
    }
  );
};

const copyToNewDir = () => {
  fs.cp(
    path.join(dto.currentDirPath, dto.targetDirName),
    path.join(dto.currentDirPath, dto.newDirName),
    { recursive: true },
    (err) => {
      if (err) throw err;
    }
  );
};

const throwError = () => {
  throw new Error(`FS operation failed`);
};

await copy();
