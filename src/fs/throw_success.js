import os from "os";

const throwSuccess = (text) => {
  const userName = os.userInfo()?.username || "You";

  console.log(`${userName}, ${text}`);
};

export default throwSuccess;
