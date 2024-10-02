import os from "os";

const throwSuccess = (text) => {
  const userName = os.userInfo()?.username || "You";

  console.log("---------------------");
  console.log(`${userName}, ${text}`);
  console.log("---------------------");
};

export default throwSuccess;
