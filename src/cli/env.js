/* 
TODO:
env.js - implement function that parses environment variables with prefix RSS_ 
and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
*/

const parseEnv = () => {
  //console.log(process.env);

  for (const key in process.env) {
    if (key.startsWith("RSS_")) {
      printRssEnv(key, process.env[key]);
    }
  }
};

const printRssEnv = (val1, val2) => {
  console.log(`${val1}=${val2};`);
};

parseEnv();
