/* 
TODO:
args.js - implement function that parses command line arguments 
(given in format --propName value --prop2Name value2, you don't need to validate it) 
and prints them to the console in the format propName is value, prop2Name is value2
*/

const parseArgs = () => {
  console.log(process.argv);
  // пропускаем первые два, потому что там путь к node.js и путь к самому файлу
  const args = process.argv.slice(2);

  args.forEach((arg, i) => {
    if (arg.startsWith("--")) {
      const val1 = arg.slice(2);
      const val2 = args[i + 1];

      printArgs(val1, val2);
    }
  });
};

const printArgs = (val1, val2) => {
  console.log(`${val1} is ${val2},`);
};

parseArgs();
