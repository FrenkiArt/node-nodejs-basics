import fs from "fs";
import os from "os";
import path from "path";

const create = async () => {
  const dto = {
    fileName: "fresh.txt",
    data: "I am fresh and young",
    userName: os.userInfo()?.username || "You",
    directoryName: "files",
    dirPath: path.join(import.meta.dirname),
    targetFilePath: path.join(
      path.join(import.meta.dirname),
      "files",
      "fresh.txt"
    ),
  };

  //console.log(dto);

  fs.access(dto.targetFilePath, fs.constants.F_OK, (err) => {
    if (err) {
      writeText(dto);
    } else {
      throw new Error(`FS operation failed`);
    }
  });
};

const writeText = (dto) => {
  fs.writeFile(dto.targetFilePath, dto.data, (err) => {
    if (err) {
      console.error(
        `${dto.userName}, О повелитель, случилась чуудовищная ОШИБКА!`,
        err
      );
    } else {
      console.log(
        `${dto.userName}, файл ${dto.fileName} создан и данные записаны.`
      );
    }
  });
};

await create();
